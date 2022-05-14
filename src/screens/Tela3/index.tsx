import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "../../hooks";

export const Tela3 = () => {
  const { navigate } = useNavigation();
  const handlePress = () => {
    navigate('tela4')
  }
  const handlePress2 = () => {
    navigate('tela2')
  }
  return (
    <View style={[styles.container]}>
      <Text onPress={handlePress}>tela 3</Text>
      <Text onPress={handlePress2}>voltar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
