import React from "react";
import { View, Text, Pressable } from "react-native";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

const CaptionLink = ({ text, navigation, routeName }) => {
  return (
    <View>
      <Spacer />
      <Text
        style={{
          alignSelf: "center",
          color: "white",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
      <Spacer />
      <Pressable onPress={() => navigation.navigate(routeName)}>
        <Text
          style={{
            alignSelf: "center",
            color: "#2ec4b6",
            fontSize: 14,
          }}
        >
          {routeName}
        </Text>
      </Pressable>
    </View>
  );
};

export default withNavigation(CaptionLink);
