import React from 'react';
import styles from './timer.less';

function Message(props) {
  return (<div>
    {props.message}
  </div>);
}

class Counter extends React.Component {
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
    const { props: { target }} = this;
    let diff = Math.floor((target - this.state.time) / 1000);
    let secs = diff % 60;
    let mins = Math.floor(diff / 60 % 60);
    let hours = Math.floor(diff / 60 / 60 % 24);
    let days = Math.floor(diff / 60 / 60 / 24);
    return (<div>{days}일 {hours}시간 {mins}분 {secs}초</div>);
  }
}

export default function (props) {
  return (<div className={styles.wrapper}><div className={styles.timer}>
    <Message message={props.message} />
    <Counter target={props.target} />
  </div></div>);
}
