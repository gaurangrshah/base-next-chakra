import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Drawer } from "../components/drawer";

export function Sidebar({ sidebarProps, ...rest }) {
  return <Drawer {...sidebarProps} {...rest} />;
}

const SidebarStateContext = createContext();
const SidebarDispatchContext = createContext();

export function SidebarProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = useState(null); // : { model, fields, initialData, action }

  useEffect(() => {
    if (!content) return;
    console.log(content);
    onOpen();
  }, [content]);

  return (
    <SidebarStateContext.Provider value={{ content, isOpen }}>
      <SidebarDispatchContext.Provider value={{ setContent, onOpen, onClose }}>
        <Sidebar content={content} sidebarProps={{ isOpen, onOpen, onClose }} />
        {children}
      </SidebarDispatchContext.Provider>
    </SidebarStateContext.Provider>
  );
}

export const useSidebarState = () => {
  const context = useContext(SidebarStateContext);
  if (context === undefined) {
    throw new Error("useSidebarState must be used within a SidebarProvider");
  }

  return { context };
};

export const useSidebarDispatch = () => {
  const context = useContext(SidebarDispatchContext);
  if (context === undefined) {
    throw new Error("useSidebarState must be used within a SidebarProvider");
  }

  return context;
};
