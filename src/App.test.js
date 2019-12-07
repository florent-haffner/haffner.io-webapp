import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './pages/AppIndex';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppIndex />, div);
  ReactDOM.unmountComponentAtNode(div);
});
