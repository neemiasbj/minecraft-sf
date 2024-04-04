import { prisma } from "@/lib/prisma";

async function getItemRequirementsByIteCod(iteCod: number) {
  return await prisma.itemRequirement.findMany({
    where: { iteCod },
    include: { itemRequirement: true },
  });
}

export { getItemRequirementsByIteCod };
