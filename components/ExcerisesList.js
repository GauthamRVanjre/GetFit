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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getSpecificExcersises = async () => {
    const result = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchQuery}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": host,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setExceriseList(data), setLoading(false), setError(false))
      .catch((err) => setError(true), setLoading(false));
  };

  const getExcersises = async () => {
    const result = await fetch("https://exercisedb.p.rapidapi.com/exercises", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": host,
      },
    })
      .then((res) => res.json())
      .then((data) => setExceriseList(data), setLoading(false), setError(false))
      .catch((err) => setError(true), setLoading(false));
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

        <View style={styles.exceriseDetailsContainer}>
          <Text style={styles.cardHeading}>
            {item.name.substring(0, 10)}...
          </Text>
          <Pressable style={styles.cardButton}>
            <Text style={{ color: COLORS.text, textAlign: "center" }}>
              Details
            </Text>
          </Pressable>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getExcersises();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      getSpecificExcersises();
    } else {
      getExcersises();
    }
  }, [searchQuery]);

  if (loading) {
    return (
      <View>
        <Text
          style={{ textAlign: "center", marginTop: 120, color: COLORS.text }}
        >
          Loading Excerises...
        </Text>
        <Pressable style={styles.cardButton}></Pressable>
      </View>
    );
  } else if (error) {
    return (
      <Text style={{ textAlign: "center", marginTop: 120, color: COLORS.text }}>
        An error occured, make sure you are connected to Internet...
      </Text>
    );
  } else
    return (
      <>
        <Text style={styles.searchText}>
          {searchQuery.length > 0
            ? `Search Results for- ${searchQuery}`
            : "Search results for all excerises"}
        </Text>
        <View>
          <FlatList
            data={exceriseList}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  searchText: {
    backgroundColor: COLORS.bodyBackground,
    color: COLORS.text,
    textAlign: "center",
    fontSize: 12,
    margin: 5,
  },
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
    width: "20%",
    marginLeft: 100,
    padding: 10,
    borderRadius: 10,
  },
  exceriseDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ExcerisesList;
