import { Component } from 'react';

export class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      bad: 0,
      neutral: 0,
      percentage: 0,
      total: 0,
    };
  }
  countTotal = () => {
    this.setState.total =
      this.setState.good + this.setState.bad + this.setState.neutral;
    return { total };
  };
  countPercentage = () => {
    this.setState.percentage = Math.round(
      (this.setState.good / this.setState.total) * 100
    );
    return { percentage } || 0;
  };
}
