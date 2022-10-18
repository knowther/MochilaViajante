import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  var mostrarText = false;
  var conteudo;

  var componente = [];

  if (mostrarText) {
    conteudo = <Text>mostrar texto true</Text>;
  } else {
    conteudo = <Text>mostrar texto false</Text>;
  }

  for(var i = 1; i<=100; i++){
    componente.push(<Text>{i}</Text>)
  }

  return (
    <View style={styles.container}>
      <Text>{conteudo}</Text>
      <Text>{componente.map((val) =>{
          return (val);
      })}</Text>
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
});
