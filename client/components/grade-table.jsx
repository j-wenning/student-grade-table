import React from 'react';
import Header from './header';
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
            grade={item.grade}/>
        )
      );
    } else noGrades = 'No grades recorded.';
    return (
      <div>
        <Header/>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
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
