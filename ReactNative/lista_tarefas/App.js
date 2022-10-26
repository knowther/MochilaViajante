import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  Button,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const image = require("./components/Calendar.jpg");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const readTask = await AsyncStorage.getItem("tasks");
        if (readTask == null) {
          setTasks([]);
        } else {
          setTasks(JSON.parse(readTask));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [atualTask, setAtualTask] = useState("");

  function deletarTarefa(id) {
    alert("Tarefa excluída com sucesso.");
    let newTasks = tasks.filter(function (val) {
      return val.id != id;
    });

    setTasks(newTasks);
    (async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
      } catch (error) {
        console.log(error);
      }
    })();
  }

  // let [fontsLoaded] = useFonts({ Lato_400Regular });

  // if (!fontsLoaded) {
  //   <AppLoading />;
  // }

  const [modalVisible, setModal] = useState(false);

  function addTask() {
    setModal(!modalVisible);
    let id = 0;
    if (tasks.length > 0) {
      id = tasks[tasks.length - 1].id + 1;
    }
    let task = { id: id, task: atualTask };
    setTasks([...tasks, task]);
    (async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify([...tasks, task]));
      } catch (error) {}
    })();
    alert("Tarefa adicionada com sucesso:" + `\n"${atualTask}"`);
    setAtualTask("");
  }

  return (
    <ScrollView style={{ width: "100%", flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          if (!atualTask == "") {
            Alert.alert("Tarefa não adicionada, dados perdidos.");
            setAtualTask("");
            setModal(!modalVisible);
          } else {
            setModal(!modalVisible);
          }
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              onChangeText={(text) => setAtualTask(text)}
              autoFocus={true}
            ></TextInput>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => addTask()}
            >
              <Text style={styles.textStyle}>Adicionar Tarefa</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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

      <TouchableOpacity
        style={styles.btnAddTask}
        onPress={() => setModal(true)}
      >
        <Text>+</Text>
      </TouchableOpacity>
      {/* <Button title="Adicionar Tarefa"></Button> */}
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
    // fontFamily: "Lato_400Regular",
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
  //styles modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  btnAddTask: {
    position: "absolute",
    right: 10,
    top: 5,
    width: 25,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#2196F3",
    marginTop: 20,
  },
});
