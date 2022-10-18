import React from "react";
import { Button, Text, View } from "react-native";

const Body = (props) => {
  function teste() {
    return <Text>Exemplo</Text>;
  }

  return (
    <View style={{ marginBottom: 10 }}>
      {teste()}
      <Button title={props.titulo}></Button>
    </View>
  );
};

export default Body;
