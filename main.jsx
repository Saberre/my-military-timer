import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer.jsx';

ReactDOM.render(
  <Timer message="소집해제까지" target={1464166800000} />,
  document.getElementById('app')
);
