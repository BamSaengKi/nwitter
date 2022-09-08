import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default () => {
  // const navigation = useNavigate();
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/")
  };

  return (
    <>
      <button onClick={onLogOutClick}>Sign Out</button>
    </>
  );
};
