import React from 'react';
import '../style/main.scss';
import StatusBar from '../components/StatusBar/statusBar';
import Chat from '../components/Chat/Chat';

export default () => {
  return (
    <>
      <StatusBar />
      <div className="sandbox-base">Welcome from sandbox</div>
      <Chat />
    </>
  );
};
