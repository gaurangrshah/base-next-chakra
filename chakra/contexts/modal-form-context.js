import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDisclosure } from "@chakra-ui/react";
import { CHModal } from "@/components/modal";
import { Responser } from "@/components/responser";
// import { Form } from "@/components/dashboard/form/form";

// @SCOPE:  extendable modal form wrapper used to render forms in dashboard table view

export function ModalForm({
  modalProps,
  model,
  fields,
  initialData = {},
  action,
  relatedTo = null,
}) {
  return (
    <CHModal {...modalProps} hasSubmit={true}>
      {Object.keys(initialData).length ? (
        <Responser {...{ initialData }} />
      ) : null}
      {/* <Form
        {...{ model, initialData, fields, action, relatedTo, ...modalProps }}
      /> */}
    </CHModal>
  );
}

const ModalFormStateContext = createContext();
const ModalFormDispatchContext = createContext();

export function ModalFormProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState(null); // : { model, fields, initialData, action }

  useEffect(() => {
    if (!form) return;
    onOpen();
  }, [form]);

  // ❌ causes optimization issues. and constant re-renders
  const newForm = useCallback((formFieldObj) => setForm(formFieldObj));

  return (
    <ModalFormStateContext.Provider value={{ form, isOpen }}>
      <ModalFormDispatchContext.Provider value={{ setForm, onOpen, onClose }}>
        <ModalForm {...form} modalProps={{ isOpen, onOpen, onClose }} />
        {children}
      </ModalFormDispatchContext.Provider>
    </ModalFormStateContext.Provider>
  );
}

export const useModalFormState = () => {
  const context = useContext(ModalFormStateContext);
  if (context === undefined) {
    throw new Error(
      "useModalFormState must be used within a ModalFormProvider"
    );
  }

  return { context };
};

export const useModalFormDispatch = () => {
  const context = useContext(ModalFormDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useModalFormState must be used within a ModalFormProvider"
    );
  }

  return context;
};
