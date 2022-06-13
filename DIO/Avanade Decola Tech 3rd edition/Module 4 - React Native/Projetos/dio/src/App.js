import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';
const bgColor = '#010409';
const imageProfileGit = 'https://avatars.githubusercontent.com/u/56652706?v=4';
const fontPrimaryColor = '#C9D1D9';
const fontSecondaryColor = '#4F565E';
const urlGit = 'https://github.com/knowther';
const App = () => {
  const handlePressGit = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlGit);
    console.log(res);
    if (res) {
      console.log('Link aprovado.');
      await Linking.openURL(urlGit);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={bgColor} barStyle="light-content"></StatusBar>
      <View style={style.content}>
        <Image
          accessibilityLabel="Johnny olhando para a câmera e sorrindo."
          style={style.avatar}
          source={{uri: imageProfileGit}}
        />
        <Text
          accessibilityLabel="Nome: Johnny Wesley"
          style={[style.defaultText, style.name]}>
          Johnny Wesley
        </Text>
        <Text
          accessibilityLabel="Usuário git: knowther"
          style={[style.defaultText, style.nickname]}>
          @knowther
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante. Respirando tecnologia, inspirando códigos"
          style={style.defaultText}>
          Estudante. Respirando tecnologia, inspirando códigos 😁.
        </Text>
        <Pressable onPress={() => handlePressGit()}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textBtn]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
        <View style={style.containerActivity}>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.chosenButton]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
          <Text style={[style.containerActivity.button]}></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  defaultText: {
    color: fontPrimaryColor,
    textAlign: 'center',
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: fontSecondaryColor,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: fontSecondaryColor,
    borderRadius: 10,
    padding: 20,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  containerActivity: {

    flexDirection: 'row',
    marginTop: 5,
    button: {
      marginLeft: 4,
      height: 10,
      backgroundColor: '#1a4e34',
      borderRadius: 5,
      padding: 10,
    },
    chosenButton: {
      marginLeft: 4,
      height: 10,
      backgroundColor: '#339a67',
      borderRadius: 5,
      padding: 10,
    },
  },
});
