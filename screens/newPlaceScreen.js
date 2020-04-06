import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../assets/colors";

const NewPlaceScreen = () => {
  const [titleValue, setTitleValue] = useState("");
  console.log("titleValue ", titleValue);
  const formHandler = (text) => setTitleValue(text);
  const savePlaceHandler = () => {};
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            formHandler(text);
          }}
        />
        <Button
          title="Save Place"
          color={colors.primary}
          onPress={() => {
            savePlaceHandler();
          }}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
