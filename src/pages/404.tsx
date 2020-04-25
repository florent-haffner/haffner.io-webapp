import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <div className="not-found">
      <div className="not-found-title">
        404 | Resource not found, <a href="/">return on home</a>.
      </div>
    </div>
  );
};
