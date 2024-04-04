import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ReactNode, useEffect } from "react";

function SimpleModal(props: {
  isOpen?: boolean;
  useButton?: boolean;
  button?: ReactNode;
  children?: ReactNode;
  title: ReactNode;
  footer?: ReactNode;
}) {
  const { isOpen, useButton, button, children, title, footer } = props;
  return function BasicUsage() {
    const modal = useDisclosure();

    return (
      <>
        {useButton && button && button}

        <Modal isOpen={modal.isOpen || isOpen || false} onClose={modal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{children}</ModalBody>

            {footer && <ModalFooter>{footer}</ModalFooter>}
          </ModalContent>
        </Modal>
      </>
    );
  };
}

export default SimpleModal;
