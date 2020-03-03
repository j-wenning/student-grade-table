import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  render() {
    let grades = null;
    let noGrades = null;
    if (this.props.grades.length) {
      grades = this.props.grades.map(
        item => (
          <Grade
            key={item.id}
            name={item.name}
            course={item.course}
            grade={item.grade}
            callback={this.props.callback}/>
        )
      );
    } else noGrades = 'No grades recorded.';
    return (
      <div className={this.props.className}>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {grades}
          </tbody>
        </table>
        <p>{noGrades}</p>
      </div>
    );
  }
}
