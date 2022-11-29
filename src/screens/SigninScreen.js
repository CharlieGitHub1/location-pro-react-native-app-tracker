import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/AuthContext";
import AuthenticationForm from "../components/AuthForm";
import CaptionLink from "../components/CaptionLink";
import Spacer from "../components/Spacer";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthenticationForm
        textTitle="SIGN IN"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="SIGN IN"
      />
      <CaptionLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />
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
