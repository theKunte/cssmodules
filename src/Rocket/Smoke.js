import React from 'react';
import styles from './Smoke.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.smoke}>
        <video className={styles.video} autoPlay loop src="/smoke.mov" />
      </div>
    );
  }
}
