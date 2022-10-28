import { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Lab01() {
  const faceAnim = useRef(new Animated.Value(0)).current;

  const faceIn = () => {
    Animated.timing(faceAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const faceOut = () => {
    Animated.timing(faceAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.containAnim, { opacity: faceAnim }]}>
        <Text style={styles.textAnim}>Lab 01</Text>
      </Animated.View>
      <View style={styles.containButton}>
        <TouchableOpacity title="Fade In View" onPress={faceIn}>
          <View style={styles.button}>
            <Text>Show Logo Animation</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity title="Fade Out View" onPress={faceOut}>
          <View style={styles.button}>
            <Text>Show Logo Animation</Text>
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
  containAnim: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textAnim: {
    padding: 20,
    fontSize: 30,
  },
  containButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
});
