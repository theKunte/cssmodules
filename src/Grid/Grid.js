import React from 'react';
import GridItem from './GridItem';

import styles from './Grid.module.css';

export default class App extends React.Component{
    updateClicked(id){
        this.props.updateClicked(id);
    }
    renderFacts(){
        return this.props.facts.map(item =>
            <GridItem
            key={item.id}
            fact={item}
            updateClicked={this.updateClicked.bind(this)}
            />
        );
    }
    render(){
        return(
           <section className={styles.grid}>
               {this.renderFacts()}
           </section>
        );
    }
}
