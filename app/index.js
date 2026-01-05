import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Chat from '../components/chat/Chat';
import { globalStyle } from '../design/globalStyles';

export default function ChatScreen() {
  return (
    <SafeAreaView style={[globalStyle.container, { justifyContent: 'flex-start', alignItems: 'stretch' }]}>
      <Chat />
    </SafeAreaView>
  );
}
