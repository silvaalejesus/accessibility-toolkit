import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "251px",
    height: "68px",
    backgroundColor: "#ffd600",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
  },
  status: {
    fontSize: "24px",
    lineHeight: "35px",
    fontWeight: 700,
    margin: "0 auto",
    maxWidth: "219px",
    height: "36px",
  },
});

export default function Status() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.status}>Discovery</Typography>
    </div>
  );
}
