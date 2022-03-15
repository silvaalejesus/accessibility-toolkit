import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    backgroundColor: "#242424",
  },
  card: {
    padding: "42px 0 0 50px",
  },
});

const Card = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>{children}</div>
    </div>
  );
};

export default Card;
