import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  rodape: {
    color: "white",
    position: " absolute",
    top: "70%",
    "& img": {
      width: "20%",
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.rodape}>
      <div className={classes.content}>
        <img
          src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-tool-office-xnimrodx-lineal-color-xnimrodx.png"
          alt=""
        />
        <Typography>Documentation:</Typography>
      </div>
      <div className={classes.links}>
        <Link>Acessibilidade</Link>
        <Link href="https://www.figma.com/file/mToA7FS5Mk0pEcrSxjjUB7/Feature-Card-(Community)?node-id=1%3A3525">
          Figma
        </Link>
        <Link href="https://reactjs.org/">ReactJS</Link>
        <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
          JavaScript
        </Link>
        <Link>CodeSandbox</Link>
      </div>
    </div>
  );
}

export default Footer;
