import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [], avg: 'N/A' };
  }

  calcAvg(grades) {
    const avg = grades.reduce((a, b) => (a.grade || a) + b.grade) / grades.length;
    return Math.floor(avg) === avg ? avg : avg.toFixed(2);
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data, avg: this.calcAvg(data) }))
      .catch(err => console.error(err));
  }

  postGrade(data) {
    fetch('/api/grades', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(data => {
      const grades = [...this.state.grades, data];
      this.setState({ grades, avg: this.calcAvg(grades) });
    }).catch(err => console.error(err));

  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    return (
      <div className="container">
        <Header className="row" avg={this.state.avg} />
        <div className="row">
          <GradeTable className="col-8" grades={this.state.grades} />
          <GradeForm className="col-4" callback={data => this.postGrade(data)} />
        </div>

      </div>
    );
  }
}

export default App;
