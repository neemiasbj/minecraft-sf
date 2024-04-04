import React, { useEffect, useState } from "react";
import SimpleModal from "../SimpleModal";
import { Item, ItemRequirement } from "@prisma/client";

function ItemModal(props: { item: Item }) {
  const { item } = props;

  const [itemRequirement, setItemRequirement] = useState<ItemRequirement[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {}
  return <></>;
}

export default ItemModal;
