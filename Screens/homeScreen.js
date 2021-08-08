import * as React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  Button,
  StatusBar,
  Text,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { DetailsScreen } from "./DetailsScreen";
import backimg from "../background.jpg";
import logo from "../logo.png";

function HomeScreen({ navigation }) {
  const [searchText, setSearchText] = React.useState("");

  return (
    <ImageBackground source={backimg} style={styles.backgroundImage}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.logoimg} source={logo} />

        <TextInput
          placeholder="Search character"
          onChangeText={(text) => setSearchText(text)}
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Search"
            onPress={() => {
              navigation.navigate("CardScreen", {
                searchText: searchText,
              });
            }}
          />
          <Button
            style={styles.button}
            title="Random"
            onPress={() => {
              navigation.navigate("CardRnd", {
                itemId: Math.floor(Math.random() * 671) + 1,
              });
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textInput: {
    backgroundColor: "white",
    margin: 5,
    width: 250,
  },
  buttonContainer: {
    width: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    color: "black",
    padding: 10,
    backgroundColor: "#a6eee6ff",
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logoimg: {
    resizeMode: "contain",
    height: 200,
    width: 400,
  },
  // text: {
  //   color: "black",
  //   fontStyle: "normal",
  // },
  // card: {
  //   margin: "5px",
  //   width: "200px",
  //   display: "flex",
  //   borderRadius: 18,
  //   backgroundColor: "black",
  // },
  // img: {
  //   width: 200,
  //   height: 200,
  //   borderTopRightRadius: 18,
  //   borderTopLeftRadius: 18,
  // },
  // cardtext: {
  //   fontStyle: "normal",
  //   color: "white",
  //   marginLeft: "5px",
  // },
});
