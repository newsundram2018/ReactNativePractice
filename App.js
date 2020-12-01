import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  TouchableHighlight,
  Alert,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("TextClicked");

  return (
    // <SafeAreaView style={styles.container}>
    //   <Text numberOfLines={2} onPress={handlePress}>
    //     Sundram Mishra
    //   </Text>
    //   <TouchableNativeFeedback onPress={() => console.log("Image touched")}>
    //     <View
    //       style={{ width: 200, height: 200, backgroundColor: "green" }}
    //     ></View>
    //   </TouchableNativeFeedback>
    //   <Button
    //     title="Hello"
    //     color="orange"
    //     onPress={() =>
    //       Alert.alert("MyTitile", "My Message", [
    //         { text: "Yes", onPress: () => console.log("Pressed Yes") },
    //         { text: "No", onPress: () => console.log("Pressed No") },
    //       ])
    //     }
    //   ></Button>
    //   <StatusBar style={{ backgroundColor: "orange" }} />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={{ width: 200, height: 200, backgroundColor: "green" }}>
        <Button
          title="Click Me"
          onPress={() =>
            Alert.alert("Mytitle", "My Message", [
              {
                text: "Yes",
              },
              { text: "No" },
            ])
          }
        ></Button>
        <StatusBar style="dark"></StatusBar>
      </View>
    </SafeAreaView>
  );
}
const containerStyle = { backgroundColor: "green" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});
