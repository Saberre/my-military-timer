import React from 'react';
import './timer.less';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {time: Date.now()};
  }
  _update() {
    this.setState({time: Date.now()});
  }
  componentDidMount() {
    setInterval(this._update.bind(this), 1000);
  }
  render() {
    const { props: { target, message } } = this;
    let diff = Math.floor((target - this.state.time) / 1000);
    let secs = diff % 60;
    let mins = Math.floor(diff / 60 % 60);
    let hours = Math.floor(diff / 60 / 60 % 24);
    let days = Math.floor(diff / 60 / 60 / 24);
    return <div className="timer">{message}<br />{days}일 {hours}시간 {mins}분 {secs}초</div>;
  }
}
