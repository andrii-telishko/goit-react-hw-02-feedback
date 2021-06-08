import React, { Component } from 'react';

class Statistic extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }

    incrementValue = (value) => {
        this.setState(prevState => {
          return {[value]: prevState[value]+1}
        })
    }
    
    render() {
        return (
            <>
            <h2>Please, leave feedback</h2>
            <ul>
                    {Object.keys(this.state).map(key => (
                        <li key={key}><button type="button" onClick={() => {this.incrementValue(key)}}>{ key }</button></li>
               ))}
                </ul>
            <h2>Statistics</h2>
                <ul>
                    {Object.entries(this.state).map(entry => (
                        <li key={entry[0]}>{entry[0]}: {entry[1] }</li>
               ))}
                </ul>
            </>
        )
    }
};

export default Statistic;