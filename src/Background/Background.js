import React from 'react';
import styles from './Background.module.css';

export default class App extends React.Component{
    render(){
        return(
            <div>
               <div className={styles.stars}></div>
               <div className={styles.alpha}></div>
               <div className={styles.nebula}></div>
            </div>
        );
    }
}
