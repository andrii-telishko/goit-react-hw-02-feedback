import React, { Component } from 'react';
import FeedbackApp from "./components/FeedbackApp";
import Statistics from "./components/Statistics";
import Section from "./components/Section";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  incrementValue = (value) => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 }
    })
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((total, value) => total + value, 0);
    return total;
  };
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positiveFeedback;
    if (this.countTotalFeedback() === 0) {
      positiveFeedback = 0;
    } else {
      positiveFeedback = Math.floor(good * 100 / this.countTotalFeedback());
    };
        
    return positiveFeedback;
  };
  
  render() {
    return (
      <Section title='Please, leave feedback'>
        <>
        <FeedbackApp
          options={this.state}
          increment={ this.incrementValue }/>
        <Statistics
          options={this.state}
          total={ this.countTotalFeedback() }
          positivePercentage={ this.countPositiveFeedbackPercentage() } />
        </>
      </Section>
    )
  };
}

export default App;
