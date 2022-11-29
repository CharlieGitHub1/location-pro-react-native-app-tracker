// create signout button.

import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const SignoutButton = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <TouchableOpacity style={styles.buttonStyle} onPress={signout}>
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#2ec4b6",
    color: "#fdfffc",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    height: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white",
  },
});

export default SignoutButton;
