import { useRef } from "react";
import {
  Button,
  Drawer as ChDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";

export function Drawer({ content = {}, isOpen, onOpen, onClose }) {
  if (!content) return "";
  const btnRef = useRef();
  const { header, body, footer } = content;
  console.log(
    "🚀 ~ file: drawer.js ~ line 17 ~ Drawer ~ header, body, footer",
    header,
    body,
    footer
  );
  return (
    <>
      <ChDrawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              {header && <header.Header {...header?.props} />}
            </DrawerHeader>

            <DrawerBody>
              <Input placeholder='Type here...' />
              {body && <body.Body {...body?.props}></body.Body>}
            </DrawerBody>

            <DrawerFooter>
              {footer && <footer.Footer {...footer?.props} />}
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </ChDrawer>
    </>
  );
}
