"use client";

import SimpleAccordion from "@/components/SimpleAccordion";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import sourceItems from "@/files/items.json";

function Items() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const mappedItems: any = sourceItems
      .map((item: any) => ({
        ...item,
        requiredItems: (
          <pre>{JSON.stringify(evaluateMaterials(item.name), null, 2)}</pre>
        ),
      }))
      .sort((a, b) => (a.name > b.name ? 1 : -1));
    setitems(mappedItems);
  }, []);

  function evaluateMaterials(name: string) {
    var tempItems = [sourceItems.find((item: any) => item.name == name) || []];
    while (tempItems.find((item: any) => item.items.length > 0)) {
      tempItems = tempItems
        .map((tempItem: any) => {
          return tempItem.items.length > 0
            ? tempItem.items.map((item1: any) => {
                const tItem: any = sourceItems.find(
                  (item2: any) => item2.name == item1.name
                );
                tItem.quantity = item1.quantity * tempItem.quantity;
                return tItem;
              })
            : tempItem;
        })
        .flat();
    }

    return tempItems.reduce((acc: any, { name, quantity }: any) => {
      return { ...acc, [name]: acc[name] ? (acc[name] += quantity) : quantity };
    }, {});
  }

  return (
    <Flex flex="1" gap="3" direction="column" p="5">
      <Heading as="h4">Items</Heading>
      <SimpleAccordion
        items={items.map((item: any) => ({
          title: item.name,
          body: item.requiredItems,
        }))}
      />
    </Flex>
  );
}

export default Items;
