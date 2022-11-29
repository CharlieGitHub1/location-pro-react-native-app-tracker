import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthenticationForm from "../components/AuthForm";
import CaptionLink from "../components/CaptionLink";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthenticationForm
        textTitle="SIGN UP"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="SIGN UP"
      />
      <CaptionLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
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
