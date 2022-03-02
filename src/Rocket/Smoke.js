import React from 'react';
import styles from './Smoke.module.css';

export default class App extends React.Component{
    render(){
        return(
            <div className={styles.smoke}>
                <div className={styles.video} autPlay loop src="/smoke.mov"/>
            </div>
        );
    }
}
