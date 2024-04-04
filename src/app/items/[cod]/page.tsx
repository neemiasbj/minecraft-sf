"use client";

import SimpleSkeleton from "@/components/SimpleSkeleton";
import { getAllItems, getItemByCod } from "@/service/item-service";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { Item } from "@prisma/client";
import React, { useEffect, useState } from "react";

function Item({ params }: { params: { cod: string } }) {
  const { cod } = params;

  const [loading, setLoading] = useState<boolean>(true);
  const [item, setItem] = useState<Item | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [baseItemsRequirement, setBaseItemsRequirement] = useState<
    { name: string; quantity: number }[]
  >([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const items = await getAllItems();
    setItems(items);

    const item = await getItemByCod(+cod);
    setItem(item);

    const baseItemsRequirement = evaluateMaterials(item);
    setBaseItemsRequirement(baseItemsRequirement);

    setLoading(false);
  }

  function evaluateMaterials(item: any) {
    var tempItems = [item || []];

    while (tempItems.find((item) => item.items.length > 0)) {
      tempItems = tempItems
        .map((tempItem) => {
          return tempItem.items.length > 0
            ? tempItem.items.map((item1: any) => {
                const tItem = items.find((item2) => item2.name == item1.name);
                tItem.quantity = item1.quantity * tempItem.quantity;
                return tItem;
              })
            : tempItem;
        })
        .flat();
    }

    return tempItems.reduce((acc, { name, quantity }) => {
      return { ...acc, [name]: acc[name] ? (acc[name] += quantity) : quantity };
    }, {});
  }

  return (
    <Flex w="full" p="5">
      {loading ? (
        <SimpleSkeleton rows={5} columns={3} />
      ) : (
        <Stack gap="5">
          <Heading as="h3">{item?.nam}</Heading>
          <pre>{JSON.stringify(baseItemsRequirement)}</pre>
        </Stack>
      )}
    </Flex>
  );
}

export default Item;
