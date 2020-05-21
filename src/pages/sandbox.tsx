import React from 'react';
import '../style/main.scss';
import StatusBar from '../components/StatusBar/statusBar';
import Chat from '../components/Chat/Chat';

const Card = data => (
  <div className="project-card">
    <p className="card-title">{data.text}</p>
    <p className="card-content">{data.content}</p>
  </div>
);

export default () => {
  return (
    <>
      <StatusBar />
      <div className="sandbox-base">
        <p>Welcome from sandbox</p>
        <div className="container-card">
          <Card
            text="Chatbot"
            content="I didn't wanted to have a contact form so I build a chatbot."
          />
          <Card
            text="Incognito"
            content="A chat to play around with real-time data !"
          />
        </div>
      </div>
      <Chat />
    </>
  );
};
