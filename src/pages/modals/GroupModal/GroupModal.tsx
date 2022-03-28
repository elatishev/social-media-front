import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import GroupList from "./GroupList";
import Fields from "./Fields/Fields";

// @ts-ignore
export default function GroupModal({ onModalClose, title }) {
  const [isCreatingNewGroup, setCreatingNewGroup] = useState(false);
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
    <div>
      <Drawer anchor="right" open={isModalOpen} onClose={onModalClose}>
        {list()}
      </Drawer>
    </div>
  );
}
