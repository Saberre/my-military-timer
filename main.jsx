import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer.jsx';

ReactDOM.render(<Timer message="소집해제까지" target={Date.parse('2016-05-25 18:00:00+0900')} />, document.getElementById('wrapper'));
