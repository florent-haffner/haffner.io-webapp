import React, { useEffect, useState } from 'react';
import ServerStateServer from '../../service/servers-state.service';

const StatusBar = () => {
  const [chatbotOnline, setChatbotOnline] = useState(false);
  const [serverOnline, setServerOnline] = useState(false);

  function getServersState(): void {
    ServerStateServer.getServersState().then(response => {
      const { data } = response;
      setServerOnline(data.server_online);
      setChatbotOnline(data.chatbot_online);
    });
  }

  useEffect(() => {
    getServersState();
  }, []);

  const ServerStates = () => {
    if (serverOnline) {
      return (
        <div className="container">
          <div>Server status</div>
          <div className="status-success">online</div>
        </div>
      );
    }
    return (
      <div className="container">
        <div>Server status</div>
        <div className="status-pending">sleeping</div>
      </div>
    );
  };
  const ChatbotServerStates = () => {
    if (chatbotOnline) {
      return (
        <div className="container">
          <div>Chatbot status</div>
          <div className="status-success">online</div>
        </div>
      );
    }
    return (
      <div className="container">
        <div>Chatbot status</div>
        <div className="status-pending">sleeping</div>
      </div>
    );
  };

  return (
    <div className="status-bar">
      <div className="container">
        <ServerStates />
        <ChatbotServerStates />
      </div>
    </div>
  );
};

export default StatusBar;
