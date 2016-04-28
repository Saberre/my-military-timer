import React from 'react';
import styles from './timer.less';

function Message({ message }) {
  return (<div>
    {message}
  </div>);
}

class Counter extends React.Component {
  constructor() {
    super();
    this._update = this._update.bind(this);
    this.state = {time: Date.now()};
  }
  _update() {
    this.setState({time: Date.now()});
  }
  componentDidMount() {
    setInterval(this._update, 1000);
  }
  render() {
    const { props: { target }} = this;
    let diff = Math.floor((target - this.state.time) / 1000);
    let secs = diff % 60;
    let mins = Math.floor((diff /= 60) % 60);
    let hours = Math.floor((diff /= 60) % 24);
    let days = Math.floor(diff / 24);
    return (<div>{days}일 {hours}시간 {mins}분 {secs}초</div>);
  }
}

export default function Timer({ message, target }) {
  return (<div className={styles.wrapper}><div className={styles.timer}>
    <Message message={message} />
    <Counter target={target} />
  </div></div>);
}
