import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { appColors } from '../../design/colors';

export default function TypingIndicator() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="small" color={appColors.active} />
      <Text style={styles.loadingText}>מקליד...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  loadingText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 12,
    animation: 'blink 1s step-start 0s infinite',   
  },
});