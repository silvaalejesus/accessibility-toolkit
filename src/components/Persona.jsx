import React from "react";
import foto from "../images/homem.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#898989",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    lineHeight: "35px",
  },
  persona: {
    width: "90%",
  },
});
function Persona(title) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <figure style={{ textAlign: "center" }}>
        <img className={classes.persona} src={foto} alt="foto de perfil" />
      </figure>
      <div className={classes.content}>
        <span style={{ fontSize: "31px" }}>Joe Moustache</span>
        <span style={{ fontSize: "24px" }}>{props.title}</span>
      </div>
    </div>
  );
}
Persona.prototype{
  
}
export default Persona;
