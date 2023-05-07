import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackWidget/FeedbackOptions';
import { Statistics } from './FeedbackWidget/Statistics';
import { Section } from './FeedbackWidget/Section';
import { Notification } from './FeedbackWidget/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedbacks = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFedbacks = () => {
    if (this.countTotalFeedbacks() === 0) {
      return 0;
    } else {
      const goodCalc = this.state.good;
      return Math.round((goodCalc / this.countTotalFeedbacks()) * 100);
    }
  };

  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedbacks() === 0 ? (
            <Notification message={'There is no feedbacks, yet'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedbacks}
              positivePercentage={this.countPositiveFedbacks}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
