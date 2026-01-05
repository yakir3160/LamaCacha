import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../../design/colors';

export default function ChatInput({ prompt, setPrompt, handleSend, loading }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="כתוב הודעה..."
        placeholderTextColor="#999"
        value={prompt}
        onChangeText={setPrompt}
        multiline
      />
      <TouchableOpacity 
        style={[styles.sendButton, { backgroundColor: !prompt.trim() ? '#ccc' : appColors.active }]} 
        onPress={handleSend}
        disabled={!prompt.trim() || loading}
      >
        <Ionicons name="send" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
    maxHeight: 100,
    textAlignVertical: 'center',
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});