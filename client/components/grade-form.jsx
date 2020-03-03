import React from 'react';

export default class GradeForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    this.props.callback({
      name: data.get('name'),
      course: data.get('course'),
      grade: data.get('grade')
    });
    e.reset();
  }

  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend" htmlFor="name">
              <span className="input-group-text pr-3"><i className="fas fa-user"></i></span>
            </div>
            <input className="form-control" type="text" name="name" id="name" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend" htmlFor="course">
              <span className="input-group-text pr-3"><i className="far fa-list-alt"></i></span>
            </div>
            <input className="form-control" type="text" name="course" id="course" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend" htmlFor="grade">
              <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
            </div>
            <input className="form-control" type="number" name="grade" id="grade" />
          </div>
          <div className="input-group d-flex justify-content-end">
            <button className="btn btn-primary mr-1" type="submit">Add</button>
            <button className="btn btn-secondary ml-1" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
