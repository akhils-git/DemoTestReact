import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import makeGrid from "react-native-gridstrap";
const Grid = makeGrid(16);

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Image
    //     source={require("./assets/location.png")}
    //     style={{ width: 200, height: 200 }}
    //   />
    //   <Text style={styles.labelStyle}>Sample Logo 1</Text>

    //   <Button title="OK1" color="#841584" />
    //   <Image
    //     style={styles.imageSize}
    //     source={{
    //       uri: "https://i.picsum.photos/id/237/200/300.jpg",
    //     }}
    //   />

    //   <TextInput
    //     style={{
    //       height: 40,
    //       borderColor: "gray",
    //       borderWidth: 2,
    //       width: 200,
    //     }}
    //     value="AS1"
    //   />
    // </View>

    <Grid.Container>
      <Grid.Row>
        <Grid.Col>
          <Text>Hey, it works.</Text>
        </Grid.Col>
        <Grid.Col>
          <Text>Yes! Sure it does.</Text>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  labelStyle: {
    fontSize: 28,
    color: "#0c9180",
  },
  buttonStyle: {
    backgroundColor: "#8cff1a",
  },
  imageSize: {
    width: 200,
    height: 200,
    margin: 50,
  },
});
