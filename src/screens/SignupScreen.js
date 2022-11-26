import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>WELCOME TO THE SIGNUP SCREEN</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("Signin")} />
      <Button
        title="Go to Primary Flow"
        onPress={() => navigation.navigate("primaryFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
