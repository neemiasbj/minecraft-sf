import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

function SimpleAccordion(props: {
  items: { title: ReactNode; body: ReactNode }[];
}) {
  const { items = [] } = props;
  return (
    <Accordion defaultIndex={[0]} allowToggle>
      {items.map((item: any, key: number) => (
        <AccordionItem
          key={item.title}
          bg={key % 2 == 0 ? "teal.100" : "white"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.body}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SimpleAccordion;
