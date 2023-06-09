import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { COLORS } from "../assets/colors";
import ExcerisesList from "../components/ExcerisesList";

const Home = () => {
  const [search, setSearch] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const exerciseByBodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  const updateSearch = (search) => {
    setSearch(search);
  };

  const handlePress = (value) => {
    setSearch(value);
  };

  const handleSearchPress = (value) => {
    setSearchQuery(value);
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.view}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search Excerise..."
            value={search}
            onChangeText={updateSearch}
          />
          <Pressable
            onPress={() => handleSearchPress(search)}
            style={styles.searchPressable}
          >
            {/* Add your search icon or text here */}
            <Text style={styles.pressableText}>Search</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.bodyPartsTabsContainer}>
            {exerciseByBodyParts.map((exercise, index) => (
              <Pressable
                onPress={() => handlePress(exercise)}
                key={index}
                style={styles.pressableTabContainer}
              >
                <Text style={styles.pressableText}>{exercise}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>

      <ExcerisesList searchQuery={searchQuery} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: COLORS.bodyBackground,
  },
  view: {
    backgroundColor: COLORS.bodyBackground,
  },
  bodyPartsTabsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: COLORS.bodyBackground,
  },
  pressableTabContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: COLORS.primaryBackground,
  },
  pressableText: {
    color: COLORS.text,
  },
  searchText: {
    backgroundColor: COLORS.bodyBackground,
    color: COLORS.text,
    textAlign: "center",
  },
  input: {
    width: "70%",
    height: "100%",
    padding: 10,
    marginLeft: 10,
    backgroundColor: COLORS.searchBackground,
    color: COLORS.text,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: COLORS.bodyBackground,
    marginLeft: 10,
  },
  searchPressable: {
    padding: 10,
    width: "20%",
    backgroundColor: COLORS.primaryBackground,
  },
});

export default Home;
