import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "../../hooks";

export const Tela2 = () => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate('tela3')
  }

  const handlePress2 = () => {
    navigate('tela1')
  }

  return (
    <View style={[styles.container]}>
      <Text onPress={handlePress}>tela 2</Text>
      <Text onPress={handlePress2}>voltar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
