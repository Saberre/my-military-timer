import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer.jsx';
import ViewportUnitsBuggyfill from 'viewport-units-buggyfill';

import './main.less';


ReactDOM.render(
  <Timer message="소집해제까지" target={new Date(2016, 5 - 1, 25, 0, 0, 0, 0).getTime()} />,
  document.getElementById('app')
);

ViewportUnitsBuggyfill.init();
