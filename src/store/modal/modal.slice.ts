import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Modal } from "../../models/Modal";

export interface ModalState {
  modal: Modal;
}

const initialState: ModalState = {
  modal: {
    isOpen: false,
    children: undefined,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Modal>): void => {
      state.modal = action.payload;
    },
    closeModal: (state): void => {
      state.modal = { isOpen: false };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state: RootState): Modal => state.modal.modal;

export default modalSlice.reducer;
