import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView style={styles.container} horizontal>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>To</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>More</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>😃</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>🚀</Text>
        </View>
      </ScrollView>
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
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: "royalblue",
    // elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
});
