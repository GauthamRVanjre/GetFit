import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../assets/colors";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../assets/login_page_img.jpg")}
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Stay health even if you stay at home</Text>
        <Text style={styles.paraText}>
          Staying fit to keep you in good condition can now go through mobile
          apps
        </Text>

        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 140,
    marginStart: 50,
    marginEnd: 50,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: COLORS.text,
    fontSize: SIZES.xxLarge,
    fontWeight: 700,
    textAlign: "center",
  },
  paraText: {
    color: COLORS.text,
    fontSize: SIZES.medium,
    textAlign: "center",
    marginTop: 20,
    marginStart: 30,
    marginEnd: 30,
  },
  button: {
    marginTop: 40,
    width: 340,
    borderRadius: 10,
    backgroundColor: COLORS.primaryBackground,
  },
  buttonText: {
    fontSize: SIZES.medium,
    textAlign: "center",
    padding: 15,
  },
});
export default SplashScreen;
