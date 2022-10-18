import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  Button,
  Platform,
} from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Platform = Platform.OS;
  }

  mostrarConteudo() {
    return (
      <View>
        <Text>{this.Platform}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: Constants.statusBarHeight}}>
        {this.mostrarConteudo()}
      </ScrollView>
    );
  }
}
