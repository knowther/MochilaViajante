import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "http://192.168.1.111/app_galeria" }}></WebView>
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
