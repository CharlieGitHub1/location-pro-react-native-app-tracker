import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

const CaptionLink = ({ text, navigation, routeName }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer />
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            color: "#2ec4b6",
            fontSize: 14,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default withNavigation(CaptionLink);
