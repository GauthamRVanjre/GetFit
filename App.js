import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, StatusBar } from "react-native";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
import DetailScreen from "./screens/DetailScreen";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000000", // Set the background color to black
          },
          headerTintColor: "#ffffff", // Set the text color to white
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 750,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
  },
});
