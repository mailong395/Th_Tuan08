import { useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Lab06() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const showAnim = () => {
    Animated.sequence([
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: -1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      showAnim();
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
                    inputRange: [-1, 0, 1],
                    outputRange: ["-45deg", "0deg", "45deg"],
                  }),
                },
              ],
            },
          ]}
          source={require("../assets/bell.png")}
        />
      </View>
      <View style={[styles.section, styles.ListButton]}>
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
    width: "100%",
    borderBottomWidth: 10,
    borderColor: "#c4c4c4",
  },

  showAnim: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  img: {
    flex: 1,
    width: "40%",
    resizeMode: "center",
  },

  ListButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,

    borderWidth: 1,
    borderRadius: 10,
  },
  titleButton: {
    fontSize: 20,
    fontWeight: "700",
  },
});
