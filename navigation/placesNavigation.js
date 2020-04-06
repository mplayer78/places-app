import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllPlacesScreen from "../screens/allPlacesScreen";
import MapScreen from "../screens/mapScreen";
import PlaceDetail from "../screens/placeDetailScreen";
import NewPlaceScreen from "../screens/newPlaceScreen";

import { StyleSheet, Text, View, Platform, Button } from "react-native";
import colors from "../assets/colors";
import CustomHeaderButton from "../components/headerButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Stack = createStackNavigator();

const navOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
};

function PlacesNavigation() {
  return (
    <Stack.Navigator initialRouteName="AllPlacesScreen">
      <Stack.Screen
        name="AllPlacesScreen"
        component={AllPlacesScreen}
        options={(optionProps) => {
          return {
            title: "All Places",
            headerRight: (props) => {
              return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item
                    title="Add Place"
                    iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                    onPress={() => {
                      optionProps.navigation.navigate("NewPlaceScreen");
                    }}
                  />
                </HeaderButtons>
              );
            },
            ...navOptions,
          };
        }}
      />
      <Stack.Screen
        name="NewPlaceScreen"
        component={NewPlaceScreen}
        options={{ title: "Add Place" }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "Map", ...navOptions }}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetail}
        options={{ title: "Place", ...navOptions }}
      />
    </Stack.Navigator>
  );
}

export default PlacesNavigation;

const styles = StyleSheet.create({});
