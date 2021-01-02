import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actiontype } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signin = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actiontype.SET_USER,
        user: result.user,
      });
    });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZDIDzDjYkAh4eERh_KKq84c6ze-RirbmhQ&usqp=CAU"
          alt=""
        />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
      </div>
      <Button onClick={signin}>SignIn</Button>
    </div>
  );
}

export default Login;
