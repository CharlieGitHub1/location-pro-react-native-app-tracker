import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>WELCOME TO THE TRACK LIST SCREEN</Text>
      <Button
        title="Go to Track Details"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
