import { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Lab04() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnimText = useRef(new Animated.Value(-270)).current;

  const showAnim = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimText, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Animated.View style={[styles.background, { opacity: fadeAnim }]}>
          <Image style={styles.img} source={require("../assets/ido.png")} />
        </Animated.View>
        <Animated.View
          style={[styles.textContent, { translateX: fadeAnimText }]}
        >
          <Text style={styles.userName}>Angelina Jolie</Text>
        </Animated.View>
      </View>
      <View style={[styles.section, styles.listButton]}>
        <TouchableOpacity onPress={showAnim}>
          <View style={styles.button}>
            <Text style={styles.titleButton}>Show</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    justifyContent: "center",

    width: "100%",
    borderBottomWidth: 10,
    borderColor: "#c4c4c4",
  },

  background: {
    flex: 1,
  },
  img: {
    flex: 1,
    width: "100%",
    resizeMode: "center",
  },
  userName: {
    fontSize: 30,
    fontWeight: "700",
  },

  textContent: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },

  listButton: {
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,

    width: 200,
    height: 50,

    borderWidth: 1,
    borderRadius: 10,
  },
  titleButton: {
    fontSize: 20,
    fontWeight: "700",
  },
});
