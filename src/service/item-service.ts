"use server";

import { prisma } from "@/lib/prisma";

async function getAllItems() {
  return await prisma.item.findMany({
    include: { item: { include: { itemRequirement: true } } },
    orderBy: {
      nam: "asc",
    },
  });
}

async function getItemByCod(iteCod: number) {
  return await prisma.item.findFirst({
    where: { iteCod },
    include: { item: true },
  });
}

export { getAllItems, getItemByCod };
