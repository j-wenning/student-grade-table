import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Grade Table</h1>
        <h2>Average Grade <span className="badge badge-secondary">{this.props.avg}</span></h2>
      </div>

    );
  }
}
