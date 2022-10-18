import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.textStyle}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#069",
    padding: 20,
    width: "100%",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
  },
});

export default Header;
