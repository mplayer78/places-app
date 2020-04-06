import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../assets/colors";

import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primary}
    />
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
