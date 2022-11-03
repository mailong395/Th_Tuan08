import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Lab01")}>
        <View style={styles.button}>
          <Text style={styles.title}>Lab 01</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Lab02")}>
        <View style={styles.button}>
          <Text style={styles.title}>Lab 02</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Lab03")}>
        <View style={styles.button}>
          <Text style={styles.title}>Lab 03</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Lab04")}>
        <View style={styles.button}>
          <Text style={styles.title}>Lab 04</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Lab05")}>
        <View style={styles.button}>
          <Text style={styles.title}>Lab 05</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Lab06")}>
        <View style={styles.button}>
          <Text style={styles.title}>Lab 06</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Lab07")}>
        <View style={styles.button}>
          <Text style={styles.title}>Lab 07</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    width: 300,
    height: 60,

    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
});
