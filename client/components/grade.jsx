import React from 'react';

export default class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td>
          <button onClick={this.props.delCallback} className="btn btn-outline-danger">
            <i className="fas fa-trash"/>
          </button>
        </td>
      </tr>
    );
  }
}
