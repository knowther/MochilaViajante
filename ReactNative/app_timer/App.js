import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import Contador from "./Contador";

export default function App() {
  console.disableYellowBox = true;
  const [state, setState] = useState("selecionar");
  const [seconds, setSeconds] = useState(1);
  const [minutes, setMinutes] = useState(0);

  const [alarmSound, setAlarmSound] = useState([
    {
      id: 1,
      selected: true,
      sound: "alarm 1",
      file: require("./assets/alarme1.mp3"),
    },

    {
      id: 2,
      selected: false,
      sound: "alarm 2",
      file: require("./assets/alarme2.mp3"),
    },
    {
      id: 3,
      selected: false,
      sound: "alarm 3",
      file: require("./assets/alarme3.mp3"),
    },
  ]);

  var numeros = [];
  for (var i = 1; i <= 60; i++) {
    numeros.push(i);
  }

  var setarAlarm = (id) => {
    let alarmTemp = alarmSound.map(function (val) {
      if (id != val.id) {
        val.selected = false;
      } else {
        val.selected = true;
      }
      return val;
    });
    setAlarmSound(alarmTemp);
  };
  if (state == "selecionar") {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(59,29,105,1)", "rgba(59,29,105,0.8)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
          }}
        />
        <Text style={{ color: "white", fontSize: 30 }}>
          Selecione o seu tempo:
        </Text>
        <View style={{ flexDirection: "row", paddingLeft: 50 }}>
          <Text style={{ color: "white", paddingTop: 16 }}>Min:</Text>
          <Picker
            style={{
              height: 50,
              width: 100,
              color: "white",
            }}
            selectedValue={minutes}
            onValueChange={(itemValue) => setMinutes(itemValue)}
          >
            <Picker.Item label="00" value="00" />
            {numeros.map(function (val) {
              return (
                <Picker.Item
                  label={`${
                    val < 10 ? `${0}${val.toString()}` : val.toString()
                  }`}
                  value={val.toString()}
                />
              );
            })}
          </Picker>
          <Text style={{ color: "white", paddingTop: 16 }}>Sec:</Text>
          <Picker
            style={{ height: 50, width: 100, color: "white" }}
            selectedValue={seconds}
            onValueChange={(itemValue) => setSeconds(itemValue)}
          >
            {numeros.map(function (val) {
              return (
                <Picker.Item
                  label={`${
                    val < 10 ? `${0}${val.toString()}` : val.toString()
                  }`}
                  value={val.toString()}
                />
              );
            })}
          </Picker>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {alarmSound.map(function (val) {
            if (val.selected) {
              return (
                <TouchableOpacity
                  key={val.id}
                  onPress={() => {}}
                  style={styles.btnEscolherSelected}
                >
                  <Text style={{ color: "white" }}>{val.sound}</Text>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  key={val.id}
                  onPress={() => setarAlarm(val.id)}
                  style={styles.btnEscolher}
                >
                  <Text style={{ color: "white" }}>{val.sound}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>

        <StatusBar style="auto" />
        <TouchableOpacity style={styles.btnStart}>
          <Text
            onPress={() => setState("iniciar")}
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "white",
              fontSize: 20,
            }}
          >
            Iniciar
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else if (state == "iniciar") {
    return (
      <Contador
        alarm={alarmSound}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setState={setState}
        minutes={minutes}
        seconds={seconds}
      ></Contador>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgb(80,50,168)",
    alignItems: "center",
    justifyContent: "center",
  },
  btnEscolher: {
    margin: 5,
    padding: 8,
    backgroundColor: "rgb(116,67,991)",
    borderColor: "transparent",
    borderWidth: 1,
  },
  btnEscolherSelected: {
    margin: 5,
    padding: 8,
    backgroundColor: "rgba(116,67,991, 0.2)",
    borderColor: "white",
    borderWidth: 1,
  },
  btnStart: {
    padding: 8,
    backgroundColor: "rgb(116,67,991)",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    borderColor: "white",
    borderWidth: 3,
  },
});
