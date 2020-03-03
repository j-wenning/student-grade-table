import React from 'react';
import GradeTable from './grade-table';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [], avg: 'N/A' };
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        let avg = data.reduce((a, b) => (a.grade || a) + b.grade) / data.length;
        avg = Math.floor(avg) === avg ? avg : avg.toFixed(2);
        this.setState({ grades: data, avg });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    return (
      <div>
        <Header avg={this.state.avg} />
        <GradeTable grades={this.state.grades} />;
      </div>);
  }
}

export default App;
