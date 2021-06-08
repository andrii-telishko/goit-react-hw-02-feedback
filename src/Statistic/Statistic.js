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

    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((total, value) => total + value, 0)
        return total
    }

    countPositiveFeedbackPercentage = () => {
        let positiveFeedback;
        if (this.countTotalFeedback() === 0) {
            positiveFeedback = 0;
        } else {
              positiveFeedback = Math.floor(this.state.good * 100 / this.countTotalFeedback());
        }
        
        
        return positiveFeedback;
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
                <p>Total:{this.countTotalFeedback()} </p>
                <p>Positive Feedback: { this.countPositiveFeedbackPercentage() } %</p>
            </>
        )
    }
};

export default Statistic;