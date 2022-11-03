import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./component/Home";
import Lab01 from "./component/Lab01";
import Lab02 from "./component/Lab02";
import Lab03 from "./component/Lab03";
import Lab04 from "./component/Lab04";
import Lab05 from "./component/Lab05";
import Lab06 from "./component/Lab06";
import Lab07 from "./component/Lab07";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lab01" component={Lab01} />
        <Stack.Screen name="Lab02" component={Lab02} />
        <Stack.Screen name="Lab03" component={Lab03} />
        <Stack.Screen name="Lab04" component={Lab04} />
        <Stack.Screen name="Lab05" component={Lab05} />
        <Stack.Screen name="Lab06" component={Lab06} />
        <Stack.Screen name="Lab07" component={Lab07} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
