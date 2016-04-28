import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer.jsx';
import ViewportUnitsBuggyfill from 'viewport-units-buggyfill';

import './main.less';


ReactDOM.render(
  <Timer message="소집해제까지" target={Date.UTC(2016, 5 - 1, 24, 15, 0, 0, 0)} />,
  document.getElementById('app')
);

ViewportUnitsBuggyfill.init();
