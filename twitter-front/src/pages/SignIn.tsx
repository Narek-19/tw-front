import React,{FC} from "react";
import {makeStyles} from "@mui/styles";

interface TitleProps {
  title: string;
}
const SignIn: FC<TitleProps> = ({ title }) => {

    const useStyles = makeStyles((theme) => ({
      el: {
        backgroundColor: "green",
        color:"red",
      },
      button: {
        color: "blue",
      },
    }));

const classes = useStyles();
  return (
    <>
      <div className={classes.el}>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default SignIn;