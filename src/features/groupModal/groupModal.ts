import { createSlice } from "@reduxjs/toolkit";

interface groupModalState {
  modalType: string | null;
  isModalOpen: boolean;
  modalProps: Record<string, any>;
}

export const initialState: groupModalState = {
  modalType: null,
  isModalOpen: false,
  modalProps: {},
};

const modalSlice = createSlice({
  name: "groupModal",
  initialState,
  reducers: {
    showModal: (_, { payload: { modalType, isModalOpen, modalProps } }): groupModalState => ({
      modalType,
      isModalOpen,
      modalProps,
    }),
    closeModal: () => {
      return initialState;
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
