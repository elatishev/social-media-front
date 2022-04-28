import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CloseIcon from "@material-ui/icons/Close";
import { useDeleteGroupMutation, useGetGroupsQuery } from "./groupModalApi";

const GroupList = () => {
  const { data: groups } = useGetGroupsQuery("20");
  const [deleteGroup] = useDeleteGroupMutation();

  const handleDeleteGroup = (id: number) => {
    deleteGroup(id);
  };

  return (
    <>
      <h3>{groups && `${groups.length} groups are avialeble for you`}</h3>
      {groups &&
        groups.map(({ groupName, groupDesc, authorName, id }: any) => (
          <ListItem key={id} component="div" disablePadding>
            <ListItemButton
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                lineHeight: ".1rem",
              }}
            >
              <h3>Name {groupName || "Not initialized"}</h3>
              <h4>Author: {authorName || "Unknown author"}</h4>
              <p>Description {groupDesc}</p>
            </ListItemButton>
            <ListItemButton>
              <CloseIcon style={{ cursor: "pointer" }} onClick={() => handleDeleteGroup(id)} />
            </ListItemButton>
          </ListItem>
        ))}
    </>
  );
};

export default GroupList;
