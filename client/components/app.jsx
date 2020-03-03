import React from 'react';
import GradeTable from './grade-table';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  calcAvg(grades) {
    if (grades.length) {
      const avg = grades.reduce((a, b) => (a.grade || a) + b.grade) / grades.length;
      return Math.floor(avg) === avg ? avg : avg.toFixed(2);
    }
    return 'N/A';
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    return (
      <div className="container">
        <Header avg={this.calcAvg(this.state.grades)} />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
