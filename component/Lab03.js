import { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Lab03() {
  const faceAnim = useRef(new Animated.Value(0)).current;

  const moveToLeft = () => {
    Animated.timing(faceAnim, {
      toValue: 310,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const returnAnim = () => {
    Animated.timing(faceAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const stopAnim = () => {
    Animated.timing(faceAnim).stop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Animated.View
          style={[styles.box, { translateX: faceAnim }]}
        ></Animated.View>
      </View>
      <View style={[styles.section, styles.listButton]}>
        <TouchableOpacity onPress={moveToLeft}>
          <View style={styles.button}>
            <Text>Move to right</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={returnAnim}>
          <View style={styles.button}>
            <Text>Move to left</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopAnim}>
          <View style={styles.button}>
            <Text>Stop</Text>
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
  },

  box: {
    width: 50,
    height: 50,

    borderRadius: 100,
    backgroundColor: "#000000",
  },

  listButton: {
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,

    width: 150,
    height: 40,

    borderWidth: 1,
    borderRadius: 10,
  },
});
