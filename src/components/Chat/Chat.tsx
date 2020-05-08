// @ts-ignore // To mask the tslint issue with React import...
import React, { useEffect, useState } from 'react';
import MessageDataService from '../../service/chat.service';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatVisible, setChatVisibility] = useState(false);
  const [conversationId, setConversationId] = useState('');

  const MessageComponent = data => (
    <div key={data.id} className="message message-user">
      {data.text}
    </div>
  );
  const ChatbotMessageComponent = data => (
    <div key={data.id} className="message-bot">
      {data.text}
    </div>
  );
  function generateUuidV4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r: number = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function handleInputChange(event): void {
    setInputValue(event.target.value);
  }

  function handleChatVisibility(): void {
    setChatVisibility(!isChatVisible);
  }

  const retrieveMessages = uuid => {
    MessageDataService.getAllByUUID(uuid).then(response => {
      setMessages(response.data);
    });
  };
  function updateMessageState(): void {
    const msgToAdd = { messageRequest: inputValue, conversationId };
    MessageDataService.create(msgToAdd).then(() => {
      retrieveMessages(conversationId);
    });
    setInputValue('');
  }

  function addMessage(event): void {
    if (event.key === 'Enter' && inputValue.length !== 0) {
      updateMessageState();
    }
  }

  useEffect(() => {
    let uuid: string = localStorage.getItem('haffnerio-chat-uuid');
    if (uuid === undefined || uuid === null) {
      uuid = generateUuidV4();
      localStorage.setItem('haffnerio-chat-uuid', uuid);
    }
    setConversationId(uuid);
    retrieveMessages(uuid);
  }, []);

  if (isChatVisible) {
    return (
      <div className="chatbot-window">
        <div className="top">
          <i className="fa fa-times" onClick={() => handleChatVisibility()} />
        </div>
        <div className="dialog">
          {/* TODO : the chatbot should return a list of messages or greet the user */}
          <ChatbotMessageComponent text="Welcome on this chatbot. This AI is in early releases, it will be feeded and tweaked until the result is compeling." />

          {/* Mapping through conversation */}
          {messages.map(msg => {
            if (msg.userId) {
              return <ChatbotMessageComponent key={msg.id} text={msg.text} />;
            }
            return <MessageComponent key={msg.id} text={msg.text} />;
          })}

          <input
            placeholder="Type your message here..."
            value={inputValue}
            autoFocus
            onChange={handleInputChange}
            onKeyPress={event => addMessage(event)}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="chatbot-button">
      <div onClick={() => handleChatVisibility()}>
        <a className="fa fa-comment" />
      </div>
    </div>
  );
};

export default Chat;
