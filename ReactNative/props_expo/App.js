import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Body from "./components/Body.js";

export default function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Usuario");
  const [list, setList] = useState(["Feijão", "Arroz", "Pão"]);
  // useEffect(() => {
  //   alert("Meu hook effect");
  // });

  return (
    <View style={{ marginTop: 30 }}>
      <Text>Bem vindo {nome}</Text>
      <Button
        title="Clique em mim"
        onPress={() => setCount(count + 5)}
      ></Button>
      <Button
        title="Adicionar"
        onPress={() => setList([...list, "Purê"])}
      ></Button>
      <Button
        title="Limpar lista"
        onPress={() => {
          setList([]);
        }}
      ></Button>
      {list.map((val) => {
        return <Text>{val}</Text>;
      })}
      <Text>{count}</Text>
    </View>
  );
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     contador: 0,
  //     pagina: "home",
  //   };
  // }

  // // Esse método nos permite rodar algo antes de renderizar
  // // componentWillMount() {
  // //   alert("gato makonha");
  // // }

  // componentDidMount() {
  //   alert("renderizou");
  // }

  // alterarAba = (pag) => {
  //   this.setState({ pagina: pag });
  // };

  // render() {
  //   if (this.state.pagina == "home") {
  //     return (
  //       <View style={{ marginTop: 30 }}>
  //         <Text>{this.state.contador} segundos</Text>
  //         <Text>Home</Text>
  //         <Button
  //           title="Clique para ir ao contato"
  //           onPress={() => this.alterarAba("contato")}
  //         ></Button>
  //       </View>
  //     );
  //   } else if (this.state.pagina == "contato") {
  //     return (
  //       <View style={{ marginTop: 30 }}>
  //         <Text>Contato</Text>
  //         <Button
  //           title="Voltar para home."
  //           onPress={() => this.alterarAba("home")}
  //         ></Button>
  //       </View>
  //     );
  //   }
  // }
}
