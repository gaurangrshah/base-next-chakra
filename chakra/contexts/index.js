import * as ErrorContext from "./error-context";
import * as ToastContext from "./toast-context";
import * as ModalContext from "./modal-context";
import * as SidebarContext from "./drawer-context";
import * as ModalFormContext from "./modal-form-context";

export const Contexts = {
  errors: ErrorContext,
  toasts: ToastContext,
  modal: ModalContext,
  sidebar: SidebarContext,
  modalForm: ModalFormContext,
};

export const Providers = {
  errors: ErrorContext.ErrorProvider,
  toasts: ToastContext.ToastProvider,
  modal: ModalContext.ModalProvider,
  sidebar: SidebarContext.SidebarProvider,
  modalForm: ModalFormContext.ModalFormProvider,
};
