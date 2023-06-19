import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../assets/colors";
import { apiKey, host } from "../api-key";

const ExcerisesList = ({ searchQuery }) => {
  const [exceriseList, setExceriseList] = useState([]);

  const getExcersises = () => {
    const result = fetch("https://exercisedb.p.rapidapi.com/exercises", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": host,
      },
    })
      .then((res) => res.json())
      .then((data) => setExceriseList(data))
      .catch((err) => console.log("Some error occured", err));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: item.gifUrl,
          }}
          onError={(error) => console.log("Error loading image:", error)}
        />
        <Text style={styles.cardHeading}>{item.name}</Text>
        <Pressable style={styles.cardButton}>
          <Text style={{ color: COLORS.text, textAlign: "center" }}>
            Expand Card
          </Text>
        </Pressable>
      </View>
    );
  };

  useEffect(() => {
    getExcersises();
  }, []);
  return (
    <View>
      <FlatList
        data={exceriseList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

{
  /* <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
          }}
          onError={(error) => console.log("Error loading image:", error)}
        />
        <Text style={styles.cardHeading}>Hello World</Text>
        <Pressable style={styles.cardButton}>
          <Text style={{ color: COLORS.text, textAlign: "center" }}>
            Expand Card
          </Text>
        </Pressable>
      </View> */
}

export default ExcerisesList;

const styles = StyleSheet.create({
  cardHeading: {
    color: COLORS.text,
    textAlign: "center",
    fontSize: 24,
    margin: 10,
  },
  card: {
    backgroundColor: COLORS.searchBackground,
    width: "80%",
    marginLeft: 40,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },

  cardButton: {
    backgroundColor: COLORS.primaryBackground,
    width: "40%",
    marginLeft: 100,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
});
