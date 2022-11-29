import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import Spacer from "./Spacer";

const AuthenticationForm = ({
  textTitle,
  errorMessage,
  onSubmit,
  submitButtonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer />
      <Text style={styles.title}>{textTitle}</Text>
      <Spacer />
      <Text style={styles.label}>Email</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="example@email.com"
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
      />
      <Spacer />
      <Text style={styles.label}>Password</Text>
      <TextInput
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="e.g., *********"
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer />
      <Pressable
        style={styles.submitButton}
        onPress={() => onSubmit({ email, password })}
      >
        <Text style={styles.submitButtonText}>{submitButtonText}</Text>
      </Pressable>
      <Spacer />
      <Spacer />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "#fdfffc",
    fontSize: 14,
    marginLeft: 15,
  },
  input: {
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    height: 40,
    backgroundColor: "#fdfffc",
    color: "#011627",
    borderRadius: 4,
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: "#2ec4b6",
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 5,
    padding: 10,
    flexDirection: "row",
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
    fontSize: 18,
    color: "#fdfffc",
    textAlign: "center",
    letterSpacing: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fdfffc",
    textAlign: "center",
    marginBottom: 50,
    margin: 15,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthenticationForm;
