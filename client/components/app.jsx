import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import GradeForm from './grade-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [], patching: false };
  }

  calcAvg(grades) {
    if (grades.length) {
      const avg = grades.reduce((a, b) => (a.grade || a) + b.grade) / grades.length;
      return Math.floor(avg) === avg ? avg : avg.toFixed(2);
    }
    return 'N/A';
  }

  togglePatch(id = false) {
    this.setState({ patching: id });
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

  deleteGrade(id) {
    fetch(`api/grades/${id}`, { method: 'DELETE' })
      .then(this.setState({ grades: this.state.grades.filter(a => a.id !== id) }))
      .catch(err => console.error(err));
  }

  patchGrade(id, data) {
    fetch(`api/grades/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => this.setState(state => {
        const [...grades] = state.grades;
        grades.splice(grades.findIndex(a => a.id === id), 1, data);
        return { grades };
      }
      ))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    const modal = !this.state.patching ? ''
      : <GradeForm
        data={this.state.grades.filter(a => a.id === this.state.patching)[0]}
        patchCallback={data => this.patchGrade(this.state.patching, data)}
        closeCallback={() => this.togglePatch()}
        modal />;
    return (
      <div className="container">
        {modal}
        <Header className="row" avg={this.calcAvg(this.state.grades)} />
        <div className="row">
          <GradeTable
            className="col-12 col-lg-8"
            grades={this.state.grades}
            delCallback={id => this.deleteGrade(id)}
            patchCallback={id => this.togglePatch(id)}/>
          <GradeForm className="ml-auto mr-auto col-8 col-lg-4" callback={data => this.postGrade(data)} />
        </div>
      </div>
    );
  }
}
