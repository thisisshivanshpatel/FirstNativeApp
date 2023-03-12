import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function ActionCards() {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            what's new in JavaScript 21 - ES12
          </Text>
        </View>

        <Image
          source={{
            uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1617164162528/B4R9Jlv5y.jpeg",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS. As of 2022, 98% of websites use JavaScript on the
            client side for webpage behavior, often incorporating third-party
            libraries
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://dev.to/imshivanshpatel/important-git-commands-which-every-developer-needs-in-his-day-to-day-life-2ba5"
              )
            }
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openWebsite("https://twitter.com/Imshivanshpatel")}
          >
            <Text style={styles.socialLinks}>Twitter</Text>
          </TouchableOpacity>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "tomato",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  socialLinks: {
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
