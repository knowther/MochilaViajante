import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Botao(props) {
  return (
    <View style={{borderColor:'white', borderWidth:0,width: '33.3%', height:"25%"}}>
      <TouchableOpacity onPress={() => props.logicaCalc(props.numero)} style={{width:'100%', height:'100%', justifyContent: "center", alignItems: 'center'}} ><Text style={{ textAlign: 'center', fontSize: 24, color:'white' }}>{props.numero}</Text></TouchableOpacity>
    </View>
  );
}
