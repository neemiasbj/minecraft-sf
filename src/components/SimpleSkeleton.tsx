import { Flex, HStack, Skeleton } from "@chakra-ui/react";
import React from "react";

function SimpleSkeleton(props: {
  rows: number;
  columns: number;
  width?: string;
  height?: string;
}) {
  const { rows, columns, width = "full", height = "32px" } = props;
  return (
    <Flex w="full">
      {new Array(rows).fill(null).map((_, index) => (
        <HStack w="full" key={"rows" + index}>
          {new Array(columns).fill(null).map((_, index) => (
            <Skeleton key={"column" + index} w={width} h={height} />
          ))}
        </HStack>
      ))}
    </Flex>
  );
}

export default SimpleSkeleton;
