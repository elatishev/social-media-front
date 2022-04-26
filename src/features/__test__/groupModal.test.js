import {
  modalReducer,
  closeModal,
  showModal,
  initialState,
} from "../../features/groupModal/groupModal";

const exampleState = {
  modalType: "GROUP_MODAL",
  isModalOpen: true,
  modalProps: {
    title: "Groups",
  },
};

describe("groupModal", () => {
  it("should return the initial state", () => {
    expect(modalReducer(undefined, {})).toEqual(initialState);
  });

  it("close exist modal", () => {
    expect(modalReducer(initialState, showModal(exampleState))).toEqual({
      modalType: "GROUP_MODAL",
      isModalOpen: true,
      modalProps: {
        title: "Groups",
      },
    });
  });

  it("close exist modal", () => {
    expect(modalReducer(exampleState, closeModal())).toEqual(initialState);
  });

  it("close modal without any open modals", () => {
    expect(modalReducer(initialState, closeModal())).toEqual({
      modalType: null,
      isModalOpen: false,
      modalProps: {},
    });
  });
});
