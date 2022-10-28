import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Botao from "./Botao";

export default function App() {
  console.disableYellowBox = true;
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");
  const [stringCalc, setStringCalc] = useState("0");

  var numeros = [];
  for (var i = 0; i <= 9; i++) {
    numeros.push(i);
  }

  return (
    <View style={{flex:1, backgroundColor: 'lightgray'}}>
      <View style={styles.topo}>
        
        <Text style={{ fontSize: 24 }}>{stringCalc}</Text>
      </View>
      <View style={{ flexDirection:"row"}}>
          <TouchableHighlight style={{width: '25%'}}><Text style={{fontSize: 24, textAlign: "center"}}>+</Text></TouchableHighlight>
          <TouchableHighlight style={{width:'25%'}} ><Text style={{fontSize: 24, textAlign: "center"}} >-</Text></TouchableHighlight>
          <TouchableHighlight style={{width:'25%'}}><Text style={{fontSize: 24, textAlign: "center"}}>/</Text></TouchableHighlight>
          <TouchableHighlight style={{width:'25%'}}><Text style={{fontSize: 24, textAlign: "center"}}>*</Text></TouchableHighlight>
        </View>
      <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 100, padding:5, flexGrow:1, flexShrink:1, flexBasis:1}}>
        {numeros.map(function (val) {
          return <Botao numero={val}></Botao>;
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  topo: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
