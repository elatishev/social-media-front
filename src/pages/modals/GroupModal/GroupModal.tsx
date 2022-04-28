import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import GroupList from "./GroupList";
import Fields from "./Fields/Fields";

export default function GroupModal({ onModalClose, title }) {
  const [isCreatingNewGroup, setCreatingNewGroup] = useState<boolean>(false);
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);

  const startCreateNewGroup = () => {
    setCreatingNewGroup((isCreatingNewGroup) => !isCreatingNewGroup);
  };

  const list = () => (
    <Box sx={{ width: 550 }} role="presentation">
      <h1>{title}</h1>
      <Button variant="contained" onClick={startCreateNewGroup}>
        Create a new group
      </Button>
      {isCreatingNewGroup && <Fields />}
      <GroupList />
    </Box>
  );

  return (
    <>
      <Drawer anchor="right" open={isModalOpen} onClose={onModalClose}>
        {list()}
      </Drawer>
    </>
  );
}
