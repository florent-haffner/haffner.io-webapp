import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatVisible, setChatVisiblity] = useState(false);
  const [userId, setUserId] = useState('');

  const MessageComponent = ({ textToShow }) => (
    <div key={messages.length} className="message">
      {textToShow}
    </div>
  );

  /**
   * Handle state update from store
   */
  useEffect(() => {
    setChatVisiblity(true);
    const generatedUserId = uuidv4();
    setUserId(generatedUserId);
  }, []);

  function addMessage(event) {
    if (event.key === 'Enter') {
      if (inputValue.length !== 0) {
        const msgToAdd = { message: inputValue };
        setMessages([...messages, msgToAdd]);
        setInputValue('');
      }
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleChatVisibility() {
    setChatVisiblity(!isChatVisible);
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0; let v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  if (isChatVisible) {
    return (
      <div className="chatbot-window">
        <div className="top">
          <p>Status: STANDALONE</p>
          <i className="fa fa-times" onClick={() => handleChatVisibility()} />
        </div>
        <div className="dialog">
          <MessageComponent textToShow="Welcome on this chatbot. I must inform you that this is an early release. This AI will be feeded and tweaked until the result is compeling." />
          {messages.map(msg => (
            <MessageComponent textToShow={msg.message} />
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
