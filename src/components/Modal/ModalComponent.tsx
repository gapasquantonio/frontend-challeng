import React from "react";
import { Modal } from "../../models/Modal";
import { ModalBox } from "./ModalComponent.styles";

export interface ModalComponentProps extends Modal {}

function ModalComponent({ children }: ModalComponentProps) {
  return <ModalBox>{children && children}</ModalBox>;
}

export default React.memo(ModalComponent);
