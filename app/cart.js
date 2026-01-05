import { View, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../design/globalStyles';
export default function CartScreen() {
  return (
    <View style={globalStyle.container}>
      <Text style={styles.text}>Cart Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
