import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView, Platform, Keyboard, View } from 'react-native';
import { sendChatMessage } from '../../services/genAiService';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import TypingIndicator from './TypingIndicator';

export default function Chat() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', text: 'שלום! אני העוזר האישי שלך. איך אני יכול לעזור לך היום?', sender: 'ai' }
  ]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef(null);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    const userMessage = { id: Date.now().toString(), text: prompt, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setLoading(true);
    Keyboard.dismiss();

    try {
      const responseText = await sendChatMessage(userMessage.text);
      const aiMessage = { id: (Date.now() + 1).toString(), text: responseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (e) {
      const errorMessage = { id: (Date.now() + 1).toString(), text: 'מצטער, נתקלתי בשגיאה. אנא נסה שוב.', sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <ChatHeader />

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MessageBubble text={item.text} isUser={item.sender === 'user'} />
        )}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={loading && <TypingIndicator />}
      />

      <ChatInput 
        prompt={prompt} 
        setPrompt={setPrompt} 
        handleSend={handleSend} 
        loading={loading} 
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop:10,
    marginBottom:50,
    
  },
  listContent: {
    padding: 16,
    paddingBottom: 20,
  },
});
