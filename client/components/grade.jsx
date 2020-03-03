import React from 'react';

export default class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, course: props.course, grade: props.grade };
  }

  render() {
    return (
      <tr>
        <td>{this.state.name}</td>
        <td>{this.state.course}</td>
        <td>{this.state.grade}</td>
      </tr>
    );
  }
}
