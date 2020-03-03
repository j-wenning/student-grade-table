import React from 'react';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  render() {
    return <GradeTable grades={this.state.grades}/>;
  }
}

export default App;
