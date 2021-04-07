import { Box, Button, Code, useDisclosure } from "@chakra-ui/react";
import { CHModal } from "@/components/modal";
import { isValidJson } from "@/utils/is-valid-json";

export const ShowJson = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{"Show"} JSON</Button>

      <CHModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        hasSubmit={true} // will hide the built-in modal close button
        allowClose
      >
        <Box as='pre' mt={4}>
          <Code w='full' borderRadius='md' p={6}>
            {isValidJson(data) ? data : JSON.stringify(data, null, 2)}
          </Code>
        </Box>
      </CHModal>
    </>
  );
};
