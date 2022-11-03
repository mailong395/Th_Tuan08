import { useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Lab07() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const changerotate = () => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start(() => {
      spinValue.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.showAnim]}>
        <Animated.Image
          style={[
            styles.img,
            {
              transform: [
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "360deg"],
                  }),
                },
              ],
            },
          ]}
          source={require("../assets/ngu-hanh.png")}
        />
      </View>
      <View style={[styles.section, styles.ListButton]}>
        <TouchableOpacity onPress={changerotate}>
          <View style={styles.button}>
            <Text style={styles.title}>Start</Text>
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
    width: "100%",
    borderBottomWidth: 10,
    borderColor: "#c4c4c4",
    backgroundColor: "#ffffff",
  },

  showAnim: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 1,
    width: "70%",
    resizeMode: "center",
  },

  ListButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,

    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
