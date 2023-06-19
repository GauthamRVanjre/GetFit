import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { COLORS } from "../assets/colors";

const Home = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.view}>
        <SearchBar
          placeholder="Search Workouts..."
          onChangeText={updateSearch}
          value={search}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <View style={styles.bodyPartsTabsContainer}>
            <Pressable style={styles.pressableTabContainer}>
              <Text style={styles.pressableText}>Pressabel 1</Text>
            </Pressable>
            <Pressable style={styles.pressableTabContainer}>
              <Text>Pressabel 2</Text>
            </Pressable>
            <Pressable style={styles.pressableTabContainer}>
              <Text>Pressabel 3</Text>
            </Pressable>
            <Pressable style={styles.pressableTabContainer}>
              <Text>Pressabel 4</Text>
            </Pressable>
            <Pressable style={styles.pressableTabContainer}>
              <Text>Pressabel 5</Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* <Text>
          {search.length > 0
            ? `Search Results for- ${search}`
            : "search something"}
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: COLORS.bodyBackground,
  },
  view: {
    backgroundColor: COLORS.text,
  },
  bodyPartsTabsContainer: {
    display: "flex",
    flexDirection: "row",
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
});

export default Home;
