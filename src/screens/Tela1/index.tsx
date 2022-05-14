import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "../../hooks";

export const Tela1 = () => {
  const { navigate } = useNavigation();
  const handlePress = () => {
    navigate('tela2')
  }
  return (
    <View style={[styles.container]}>
      <Text onPress={handlePress}>tela 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
