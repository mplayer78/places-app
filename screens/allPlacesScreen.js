import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from "../components/placeItem";

const AllPlacesScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  console.log("places", places);
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        <Text>Hey from text</Text>;
        // <PlaceItem
        //   image={null}
        //   title={itemData.item.title}
        //   address={null}
        //   onSelect={() => {
        //     props.navigation.navigate("PlaceDetail", {
        //       placeTitle: itemData.item.title,
        //       placeId: itemData.item.id,
        //     });
        //   }}
        // />;
      }}
    />
  );
};

export default AllPlacesScreen;

const styles = StyleSheet.create({});
