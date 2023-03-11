import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevateCards";
import FancyCards from "./components/FancyCards";

const App2Pro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App2Pro;
