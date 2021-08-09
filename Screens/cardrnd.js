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
import backimg from "../src/img/background.jpg";
import loadingimg from "../src/img/loading.gif";
import unknowimg from "../src/img/unknow.jpg";

function CardRnd({ route, navigation }) {
  const { itemId } = route.params;
  const [characterData, setCharacterData] = React.useState("");
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    setStatus("loading");

    fetch(`https://rickandmortyapi.com/api/character/${itemId}`)
      .then((response) =>
        response.json().then((data) => {
          if (data.results === null) {
            setStatus("error");
          } else {
            setCharacterData(data);
            setStatus("success");
          }
        })
      )
      .catch((error) => setStatus("error"));
  }, []);

  if (characterData && status === "success") {
    return (
      <ImageBackground source={backimg} style={styles.backgroundImage}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.card}>
            <Image style={styles.img} source={{ uri: characterData.image }} />
            <View style={styles.description}>
              <Text style={styles.cardtext}>Name: {characterData.name}</Text>
              <Text style={styles.cardtext}>
                Gender: {characterData.gender}
              </Text>
              <Text style={styles.cardtext}>
                Specie: {characterData.species}
              </Text>
              <Text style={styles.cardtext}>
                Status: {characterData.status}
              </Text>
            </View>
          </View>
          <View styles={styles.buttonContainer}>
            <Button
              title="Another random"
              onPress={() =>
                navigation.push("CardRnd", {
                  itemId: Math.floor(Math.random() * 671) + 1,
                })
              }
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </ImageBackground>
    );
  } else if (status === "loading") {
    return (
      <ImageBackground source={backimg} style={styles.backgroundImage}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={loadingimg} style={styles.loadingimg} />
        </View>
      </ImageBackground>
    );
  } else if (!characterData || status === "error")
    return (
      <ImageBackground source={backimg} style={styles.backgroundImage}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.card}>
            <Image style={styles.img} source={unknowimg} />
            <View style={styles.description}>
              <Text style={styles.cardtext}>Name: Unknow</Text>
              <Text style={styles.cardtext}>Gender: Unknow</Text>
              <Text style={styles.cardtext}>Specie: Unknow</Text>
              <Text style={styles.cardtext}>Status: Unknow</Text>
            </View>
          </View>

          <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
      </ImageBackground>
    );
}

export default CardRnd;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
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
  text: {
    color: "black",
    fontStyle: "normal",
  },
  card: {
    margin: 5,
    width: 200,
    display: "flex",
    borderRadius: 18,
    backgroundColor: "black",
  },
  img: {
    width: 200,
    height: 200,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  cardtext: {
    fontStyle: "normal",
    color: "white",
    marginLeft: 5,
  },
  loadingimg: {
    width: "100%",
    height: "100%",
  },
});
