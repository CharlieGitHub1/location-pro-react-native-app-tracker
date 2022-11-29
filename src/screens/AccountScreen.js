import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#011627",
    color: "#fdfffc",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 20,
    color: "#fdfffc",
    fontWeight: "bold",
    marginHorizontal: 15,
  },
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

export default AccountScreen;
