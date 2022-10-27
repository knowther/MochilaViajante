import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Audio } from "expo-av";
export default function Contador(props) {
  var done = false;
  useEffect(() => {
    const timer = setInterval(() => {
      props.setSeconds(props.seconds - 1);
      if (props.seconds <= 0) {
        if (props.minutes > 0) {
          props.setMinutes(props.minutes - 1);
          props.setSeconds(59);
        } else {
          if (!done) {
            done = true;
            playSound();
            props.setState("selecionar");
            props.setMinutes(0);
            props.setSeconds(1);
          }
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  let resetar = () => {
    alert("Tempo concluído");
    props.setState("selecionar");
    props.setMinutes(1);
    props.setSeconds(0);
  };

  async function playSound() {
    const soundObject = new Audio.Sound();
    try {
      var alarme;
      props.alarm.map(function (val) {
        if (val.selected) {
          alarme = val.file;
        }
      });
      await soundObject.loadAsync(alarme);
      await soundObject.playAsync();
      // await soundObject.unloadAsync();
    } catch (error) {}
  }

  let formatNumbers = (number) => {
    var finalNumber = "";
    if (number < 10) {
      finalNumber = "0" + number;
    } else {
      finalNumber = number;
    }
    return finalNumber;
  };

  var seconds = formatNumbers(props.seconds);
  var minutes = formatNumbers(props.minutes);

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
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.textContador}>{minutes}:</Text>
        <Text style={styles.textContador}>{seconds}</Text>
      </View>
      <TouchableOpacity style={styles.btnStart}>
        <Text
          onPress={() => resetar()}
          style={{
            textAlign: "center",
            marginTop: 20,
            color: "white",
            fontSize: 20,
          }}
        >
          Resetar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContador: {
    color: "white",
    fontSize: 30,
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
