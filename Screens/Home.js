import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("test");
      }}
    >
      <Text>hello home</Text>
    </TouchableOpacity>
  );
};
export default Home;
