import React, {useEffect, useState} from 'react';
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
        <div>
          Server : <p>online</p>
        </div>
      );
    }
    return (
      <div>
        Server : <p>offline</p>
      </div>
    );
 };
  const ChatbotServerStates = () => {
    if (chatbotOnline) {
      return (
        <div>
          Chatbot : <p>online</p>
        </div>
      );
    }
    return (
      <div>
        Chatbot: <p>offline</p>
      </div>
    );
  };

  return (
    <div className="status-bar">
      <ServerStates />
      <ChatbotServerStates />
      <p>2020-05-08 - This webapp is an early release.</p>
    </div>
  );
};

export default StatusBar;
