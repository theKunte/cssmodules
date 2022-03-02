import React from 'react';
import styles from './Rocket.module.css';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <img src="/shuttle.png" alt="shuttle" className={styles.img}/>
            </div>
        );
    }
}
