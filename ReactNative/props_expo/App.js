import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Body from "./components/Body.js";

export default function  App(){
  
    return (
      <View style={{ marginTop: 30 }}>
        <Body titulo="Clique aqui - Johnny"></Body>
        <Body titulo="Clique aqui - Johnny"></Body>
        <Body titulo="Clique aqui - Johnny"></Body>
      </View>
    );

}
