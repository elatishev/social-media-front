import React from "react";
import { connect, useDispatch } from "react-redux";
import GroupModal from "./GroupModal/GroupModal";
import { closeModal } from "../../slices/groupModal/groupModal";

type TEvent = React.KeyboardEvent;

const MODAL_COMPONENTS: any = {
  GROUP_MODAL: GroupModal,
};

const RootModal = ({ modalType, modalProps }) => {
  const dispatch = useDispatch();

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  const onModalClose = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as TEvent).key === "Tab" || (event as TEvent).key === "Shift")
    ) {
      return;
    }
    dispatch(closeModal());
  };

  return (
    <>
      <SpecificModal {...modalProps} onModalClose={onModalClose} />
    </>
  );
};

export default connect((state: any) => state.modal)(RootModal);
