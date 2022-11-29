import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const LoadingScreen = () => {
  const { trySigningInLocally } = useContext(AuthContext);

  useEffect(() => {
    trySigningInLocally();
  }, []);

  return null;
};

export default LoadingScreen;
