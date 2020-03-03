import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="col-12 text-center col-lg-6 text-lg-left">
          <h1>Student Grade Table</h1>
        </div>
        <div className="pt-lg-2 col-12 text-center col-lg-6 text-lg-right">
          <h2>Average Grade <span className="badge badge-secondary">{this.props.avg}</span></h2>
        </div>
      </div>

    );
  }
}
