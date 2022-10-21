import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Foundation } from "@expo/vector-icons";

export default function App() {
  const image = require("./components/Calendar.jpg");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "My task 1",
    },
    {
      id: 2,
      task: "My task 2",
    },
    {
      id: 3,
      task: "My task 3",
    },
  ]);

  function deletarTarefa(id) {
    alert("Deseja excluir tarefa:" + id + " ?");
  }

  let [fontsLoaded] = useFonts({ Lato_400Regular });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>Lista de tarefas</Text>
        </View>
      </ImageBackground>

      {tasks.map(function (val) {
        return (
          <View style={styles.tarefaSingle}>
            <View style={{ flex: 1, width: "100%" }}>
              <Text> {val.task}</Text>
            </View>
            <View style={{ alignItems: "flex-end", flex: 1, padding: 10 }}>
              <TouchableOpacity onPress={() => deletarTarefa(val.id)}>
                <Foundation name="minus-circle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
  },
  coverView: {
    width: "100%",
    height: 80,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  textHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 20,
    fontFamily: "Lato_400Regular",
  },
  tarefaSingle: {
    alignSelf: "flex-start",
    marginTop: 30,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
    paddingBottom: 10,
  },
});
