import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthenticationForm from "../components/AuthForm";
import CaptionLink from "../components/CaptionLink";
import Spacer from "../components/Spacer";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthenticationForm
        textTitle="SIGN IN"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <CaptionLink text="Don't have an account yet?" routeName="SIGN UP" />
      <Spacer />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
