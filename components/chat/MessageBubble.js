import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../../design/colors';

export default function MessageBubble({ text, isUser }) {
  return (
    <View style={[
      styles.bubble, 
      isUser ? styles.userBubble : styles.aiBubble
    ]}>
      <Text style={[
        styles.messageText, 
        isUser ? styles.userText : styles.aiText
      ]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: appColors.active,
    borderBottomRightRadius: 4,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: 'white',
  },
  aiText: {
    color: '#333',
  },
});