import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={{ ...styles.card, ...styles.cardOne }}>
          <Text style={styles.text}>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>

        <View style={{ ...styles.card, ...styles.cardOne }}>
          <Text style={styles.text}>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
    flex: 1,
    justifyContent: "center",
  },
  cardOne: {
    backgroundColor: "tomato",
  },
  cardTwo: {
    backgroundColor: "limegreen",
  },
  cardThree: {
    backgroundColor: "royalblue",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
