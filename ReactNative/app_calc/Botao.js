import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Botao(props) {
  return (
    <View>
      <TouchableOpacity style={{padding:40, borderColor:'black', borderWidth:1}} ><Text style={{ fontSize: 24 }}>{props.numero}</Text></TouchableOpacity>
    </View>
  );
}
