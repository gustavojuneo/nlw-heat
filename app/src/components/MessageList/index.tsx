import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { ScrollView } from 'react-native';
import { api } from '../../services/api';
import { Message } from '../Message';

import { styles } from './styles';

const messagesQueue: Message[] = [];
const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
        );
      }

      messagesQueue.shift();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    api
      .get<Message[]>('messages/last3')
      .then(response => setMessages(response.data));
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {messages.map(message => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  );
}
