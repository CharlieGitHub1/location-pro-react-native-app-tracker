import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthenticationForm from "../components/AuthForm";
import CaptionLink from "../components/CaptionLink";
import Spacer from "../components/Spacer";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  console.log(state);

  return (
    <View style={styles.container}>
      <AuthenticationForm
        textTitle="SIGN UP"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <CaptionLink text="Have an account already?" routeName="SIGN IN" />

      <Spacer />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#011627",
    color: "#fdfffc",
    flex: 1,
    justifyContent: "center",
  },
});

export default SignupScreen;
