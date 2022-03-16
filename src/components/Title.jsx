import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "#EDEDED",
    margin: "30px 0 47px 0",
  },
  title: {
    fontSize: "3em",
  },
});

function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Feature Title
      </Typography>
    </div>
  );
}

export default Title;
