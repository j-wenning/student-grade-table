import React from 'react';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  getGrades() {
    fetch('http://localhost:3001/api/grades', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getGrades();
  }

  render() {
    return <GradeTable grades={this.state.grades}/>;
  }
}

export default App;
