import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [state, setState] = useState("leitura");
  const [anotacao, setAnotacao] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const anotacaoLeitura = await AsyncStorage.getItem("anotacao");
        alert("passo");
        setAnotacao(anotacaoLeitura);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  setData = async () => {
    try {
      await AsyncStorage.setItem("anotacao", anotacao);

      alert("Suas notas foram salvas.");
    } catch (error) {
      console.log(error);
    }
  };

  function atualizarTexto() {
    setState("leitura");
    setData();
  }

  if (state == "leitura") {
    return (
      <View style={{ width: "100%" }}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              padding: 20,
            }}
          >
            Aplicativo Anotação
          </Text>
        </View>
        {anotacao != "" ? (
          <View>
            <Text style={{ padding: 20 }}>{anotacao}</Text>
          </View>
        ) : (
          <View>
            <Text style={{ opacity: 0.3, padding: 10 }}>
              Nenhuma anotação encontrada.{" "}
            </Text>
          </View>
        )}

        <TouchableOpacity
          onPress={() => setState("atualizando")}
          style={styles.btnAnotacao}
        >
          {anotacao == "" ? (
            <Text style={styles.btnAnotacaoText}>+</Text>
          ) : (
            <Text style={styles.btnEditar}>Editar</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  } else if (state == "atualizando") {
    return (
      <View style={{ width: "100%" }}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 18,
              padding: 20,
            }}
          >
            Aplicativo Anotação
          </Text>
        </View>
        <TextInput
          autoFocus={true}
          style={{ padding: 20 }}
          onChangeText={(text) => setAnotacao(text)}
          multiline={true}
          numberOfLines={5}
          value={anotacao}
        ></TextInput>
        <TouchableOpacity
          onPress={() => atualizarTexto()}
          style={styles.btnAnotacao}
        >
          <Text style={styles.btnAnotacaoSave}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 10,
    backgroundColor: "#069",
  },
  anotacao: {
    fontSize: 16,
    padding: 20,
  },
  btnAnotacao: {
    position: "absolute",
    right: 20,
    bottom: -300,
    width: 50,
    height: 50,
    backgroundColor: "#068",
    borderRadius: 25,
  },
  btnAnotacaoText: {
    color: "white",
    position: "relative",
    textAlign: "center",
    fontSize: 30,
    top: 3,
  },
  btnEditar: {
    fontSize: 14,
    color: "white",
    position: "relative",
    textAlign: "center",
    top: 15,
  },
  btnAnotacaoSave: {
    color: "white",
    position: "relative",
    textAlign: "center",
    top: 15,
  },
});
