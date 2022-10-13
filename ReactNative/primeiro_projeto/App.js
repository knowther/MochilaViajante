import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={{ marginTop: 20, flex: 1 }}>
        <Header></Header>
        <Body></Body>
      </ScrollView>
    );
  }
}
