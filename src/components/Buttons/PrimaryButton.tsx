import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const PrimaryButton = () => {
  const styles = useStyles();

  return (
    <Button
      className={styles.root}
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
    ></Button>
  );
};

export default PrimaryButton;
