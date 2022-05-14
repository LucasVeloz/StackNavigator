import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "../../hooks";

export const Tela4 = () => {
  const { navigate } = useNavigation();
  const handlePress = () => {
    navigate('tela3')
  }
  return (
    <View style={[styles.container]}>
      <Text onPress={handlePress}>tela 4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
