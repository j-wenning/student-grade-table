import React from 'react';
import GradeTable from './grade-table';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data =>
        this.setState({
          grades: data,
          avg: data.reduce((a, b) => (a.grade || a) + b.grade) / data.length
        }))
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
