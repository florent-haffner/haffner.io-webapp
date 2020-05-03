// @ts-ignore // To mask the tslint issue with React import...
import React, { useEffect, useState } from 'react';
import getApiUrl from '../../service/Chat.service';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatVisible, setChatVisibility] = useState(false);
  const [userId, setUserId] = useState('');

  const MessageComponent = ({ textToShow }) => (
    <div key={messages.length} className="message">
      {textToShow}
    </div>
  );

  function generateUuidV4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r: number = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleChatVisibility(): void {
    setChatVisibility(!isChatVisible);
  }

  function sendMessageToAPI(message): Promise<void> {
    return fetch(`${getApiUrl()}chatbot/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*/*' },
      mode: 'cors',
      body: JSON.stringify(message),
    }).then(response => response.json());
  }

  function updateMessageState(): void {
    const msgToAdd = { textToShow: inputValue, userId };
    // useEffect(() => {
    //   const response: Promise<void> = sendMessageToAPI(msgToAdd);
    //   response.then(r => r);
    // });
    setMessages([...messages, msgToAdd]);
    setInputValue('');
  }

  function addMessage(event): void {
    if (event.key === 'Enter' && inputValue.length !== 0) {
      updateMessageState();
    }
  }

  useEffect(() => {
    setChatVisibility(true);
    const generatedUserId: string = generateUuidV4();
    setUserId(generatedUserId);
  }, []);

  if (isChatVisible) {
    return (
      <div className="chatbot-window">
        <div className="top">
          <p>Status: STANDALONE</p>
          <i className="fa fa-times" onClick={() => handleChatVisibility()} />
        </div>
        <div className="dialog">
          {/* TODO : the chatbot should return a list of messages or greet the user */}
          <MessageComponent textToShow="Welcome on this chatbot. This AI is in early releases, it will be feeded and tweaked until the result is compeling." />

          {/* Mapping through conversation */}
          {messages.map(msg => (
            <MessageComponent textToShow={msg.textToShow} />
          ))}

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
