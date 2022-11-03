import { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Lab05() {
  const box1AnimShow = useRef(new Animated.Value(0)).current;
  const box1AnimMove = useRef(new Animated.Value(0)).current;
  const box2AnimShow = useRef(new Animated.Value(0)).current;
  const box2AnimMove = useRef(new Animated.Value(310)).current;
  const box3AnimShow = useRef(new Animated.Value(0)).current;
  const box3AnimMove = useRef(new Animated.Value(0)).current;

  const actionAnim = () => {
    Animated.sequence([
      Animated.timing(box1AnimMove, {
        toValue: 310,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(box2AnimMove, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(box3AnimMove, {
        toValue: 310,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.sequence([
      Animated.timing(box1AnimShow, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(box1AnimShow, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(box2AnimShow, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(box2AnimShow, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(box3AnimShow, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(box3AnimShow, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.showAnima]}>
        <Animated.View
          style={[
            styles.box,
            { opacity: box1AnimShow, translateX: box1AnimMove },
          ]}
        />
        <Animated.View
          style={[
            styles.box,
            { opacity: box2AnimShow, translateX: box2AnimMove },
          ]}
        />
        <Animated.View
          style={[
            styles.box,
            { opacity: box3AnimShow, translateX: box3AnimMove },
          ]}
        />
      </View>
      <View style={[styles.section, styles.ListButton]}>
        <TouchableOpacity onPress={actionAnim}>
          <View style={styles.bgButton}>
            <Text style={styles.tilButton}>Action</Text>
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

  showAnima: {
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  box: {
    backgroundColor: "#000000",

    width: 50,
    height: 50,

    borderRadius: 10,
  },

  ListButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  bgButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,

    borderWidth: 1,
    borderRadius: 10,
  },
  tilButton: {
    fontSize: 20,
    fontWeight: "700",
  },
});
