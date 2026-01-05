import { View, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../../design/globalStyles';
export default function SearchScreen() {
  return (
    <View style={globalStyle.container}>
      <Text style={styles.text}>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
