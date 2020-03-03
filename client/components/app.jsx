import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import GradeForm from './grade-form';

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

  postGrade(data) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => this.setState({ grades: [...this.state.grades, data] }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    return (
      <div className="container">
        <Header className="row" avg={this.calcAvg(this.state.grades)} />
        <div className="row">
          <GradeTable className="col-12 col-lg-8" grades={this.state.grades} />
          <GradeForm className="m-auto col-8 col-lg-4" callback={data => this.postGrade(data)} />
        </div>

      </div>
    );
  }
}

export default App;
