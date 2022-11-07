import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Botao from "./Botao";
import Constants from "expo-constants";

export default function App() {
  console.disableYellowBox = true;
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");
  const [stringCalc, setStringCalc] = useState("0");

  var numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3, "<-", 0, "C"];
  // for (var i = 9; i >= 0; i--) {
  //   numeros.push(i);
  // }

  function logicaCalc(n) {
    if (n == "C") {
      setStringCalc("0");
      setFirstNumber(0);
      setSecondNumber(0);
      setSinal("");
    }
    if (n != "C") {
      if (sinal == "") {
        setFirstNumber(parseFloat(firstNumber.toString() + n.toString()));
        setStringCalc(parseFloat(firstNumber.toString() + n.toString()));
      }
      if ((n == "/" || n == "*" || n == "+" || n == "-") && secondNumber == 0) {
        setStringCalc(firstNumber.toString() + n);
        setSinal(n);
      }
      if (sinal != "") {
        setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
        setStringCalc(
          firstNumber + sinal + secondNumber.toString() + n.toString()
        );
      }
      if (n == "=") {
        let resultado = 0;

        if (sinal == "+") {
          resultado = firstNumber + secondNumber;
        } else if (sinal == "-") {
          resultado = firstNumber - secondNumber;
        } else if (sinal == "/") {
          resultado = firstNumber / secondNumber;
        } else if (sinal == "*") {
          resultado = firstNumber * secondNumber;
        }
        setStringCalc(resultado.toString());
        setFirstNumber(resultado);
        setSinal("");
        setSecondNumber(0);
      }
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "black", marginTop: Constants.statusBarHeight +5}}>
      <View style={styles.topo}>
        <Text style={{ fontSize: 24, color: "white" }}>{stringCalc}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: "16.6%",
          alignItems: "center",
          borderBottomColor: "black",
          borderBottomWidth: 2,
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            backgroundColor: "rgb(20,20,20)",
            justifyContent: "center",
            height: "100%",
          }}
          onPress={() => logicaCalc("+")}
        >
          <Text style={{ color: "orange", fontSize: 24, textAlign: "center" }}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            color: "orange",
            width: "20%",
            backgroundColor: "rgb(20,20,20)",
            justifyContent: "center",
            height: "100%",
          }}
          onPress={() => logicaCalc("-")}
        >
          <Text style={{ color: "orange", fontSize: 24, textAlign: "center" }}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            backgroundColor: "rgb(20,20,20)",
            justifyContent: "center",
            height: "100%",
          }}
          onPress={() => logicaCalc("/")}
        >
          <Text style={{ color: "orange", fontSize: 24, textAlign: "center" }}>
            /
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            backgroundColor: "rgb(20,20,20)",
            justifyContent: "center",
            height: "100%",
          }}
          onPress={() => logicaCalc("*")}
        >
          <Text style={{ color: "orange", fontSize: 24, textAlign: "center" }}>
            *
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            backgroundColor: "rgb(20,20,20)",
            justifyContent: "center",
            height: "100%",
          }}
          onPress={() => logicaCalc("=")}
        >
          <Text style={{ color: "orange", fontSize: 24, textAlign: "center" }}>
            =
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", height: "66.8%" }}>
        {numeros.map(function (val) {
          return <Botao logicaCalc={logicaCalc} numero={val}></Botao>;
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    height: "16.6%",
    justifyContent: "center",
    paddingLeft: 20,
  },
});
