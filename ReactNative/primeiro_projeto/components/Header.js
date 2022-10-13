import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View style={{ backgroundColor: "#069", padding: 20, width:'100%' }}>
      <Text style={{ textAlign: "center", fontSize: 30, color: "#fff" }}>
        Home
      </Text>
    </View>
  );
};

export default Header;
