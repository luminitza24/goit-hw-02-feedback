import { Component } from 'react';
import css from '../feedback/Feedback.css';

export class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      bad: 0,
      neutral: 0,
    };

    handleIncrement = () => {
      this.setState((state, props) => ({
        value: state.value + props.step,
      }));
    };
    handleClickGood = () => {
      this.setState(state => ({
        good: this.state.good + 1,
      }));
    };
    this.handleClickBad = () => {
      this.setState(state => ({
        bad: this.state.bad + 1,
      }));
    };
    this.handleClickNeutral = () => {
      this.setState(state => ({
        neutral: this.state.neutral + 1,
      }));
    };
  }
  render() {
    return (
      <div className="feedback">
        <h2 class="title">Please leave feedback!</h2>
        <button
          className="buttons"
          type="button"
          onClick={this.handleClickGood.bind(this)}
        >
          Good: {good}
        </button>
        <button
          className="buttons"
          type="button"
          onClick={this.handleClickNeutral.bind(this)}
        >
          Neutral:{neutral}
        </button>
        <button
          className="buttons"
          type="button"
          onClick={this.handleClickBad.bind(this)}
        >
          Bad:{bad}
        </button>
      </div>
    );
  }
}
