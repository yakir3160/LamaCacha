import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../../design/colors';

export default function ChatHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>LamaCacha AI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: appColors.secondary,
  },
});