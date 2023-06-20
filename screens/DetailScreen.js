import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../assets/colors";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  return (
    <View>
      <Text>Excerise ID is:- {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default DetailScreen;
