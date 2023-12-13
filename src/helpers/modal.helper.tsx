import { ReactNode } from "react";
import { openModal } from "../store/modal/modal.slice";
import { store } from "../store/store";

export interface ModalHelperProps {
  children: ReactNode;
}

class ModalHelper {
  static Show = (props: ModalHelperProps): void => {
    const { children } = props ?? {};
    store.dispatch(
      openModal({
        children: children && children,
        isOpen: true,
      })
    );
  };
}

export default ModalHelper;
