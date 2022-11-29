import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import SignoutButton from "../components/Button";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  useEffect(() => {
    signout();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View style={styles.container}>
        <Text style={styles.text}>WELCOME TO THE ACCOUNT SCREEN</Text>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <SignoutButton text="SIGN OUT" routeName="Signin" />
      </View>
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
});

export default AccountScreen;
