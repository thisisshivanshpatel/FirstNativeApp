import React from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello 😎🇮🇳
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 52,
  },
  darkText: {
    color: "black",
    fontSize: 32,
  },
});

export default AppPro;
