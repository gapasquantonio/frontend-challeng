import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectModal } from "../../store/modal/modal.slice";
import { ContainerModal } from "./ContainerModal.styles";
import { Modal as ModalType } from "../../models/Modal";
import { Modal } from "../../components";

interface ContainerProps {}

const ContainerModalComponent: React.FC<ContainerProps> = () => {
  const modal: ModalType = useAppSelector(selectModal);

  return (
    <ContainerModal data-testid="ContainerModal">
      {modal.isOpen && <Modal {...modal} />}
    </ContainerModal>
  );
};

export default React.memo(ContainerModalComponent);
