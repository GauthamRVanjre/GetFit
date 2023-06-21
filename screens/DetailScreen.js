import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { apiKey, host } from "../api-key";
import { COLORS } from "../assets/colors";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const [exceriseData, setExceriseData] = useState({});

  const getExceriseById = async (id) => {
    const result = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": host,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setExceriseData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getExceriseById(id);
  }, [id]);
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsHeading}>{exceriseData.name}</Text>

      <Image
        style={styles.cardImage}
        source={{
          uri: exceriseData.gifUrl,
        }}
        onError={(error) => console.log("Error loading image:", error)}
      />

      <View>
        <Text style={styles.detailsText}>
          Exercises keep you strong. {exceriseData.name} is one of the best
          excerise to target {exceriseData.target}. It will help you improve
          your mood and gain energy
        </Text>

        <Text style={styles.targetMusclesText}>Target Muscles :-</Text>
        <View style={styles.musclesContainer}>
          <Text style={styles.targetMusclesText}>{exceriseData.bodyPart}</Text>
          <Text style={styles.targetMusclesText}>{exceriseData.target}</Text>
          <Text style={styles.targetMusclesText}>{exceriseData.equipment}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: COLORS.bodyBackground,
    paddingBottom: 10,
  },
  detailsHeading: {
    color: COLORS.text,
    textAlign: "center",
    fontSize: 32,
    marginTop: 30,
  },
  cardImage: {
    width: "80%",
    marginLeft: 40,
    marginTop: 40,
    height: 300,
  },
  detailsText: {
    color: COLORS.text,
    margin: 20,
    fontSize: 18,
    paddingLeft: 20,
  },
  targetMusclesText: {
    color: COLORS.text,
    margin: 20,
    fontSize: 18,
    paddingLeft: 20,
  },
  musclesContainer: {
    paddingLeft: 20,
  },
});
export default DetailScreen;
