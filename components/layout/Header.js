
import { Text, View, StyleSheet } from 'react-native';
import { appColors } from '../../design/colors';
import { globalStyle } from '../../design/globalStyles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>LamaCacha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: appColors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: appColors.secondary,
  }
});

