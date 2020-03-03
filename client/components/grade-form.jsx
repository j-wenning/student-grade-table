import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', course: '', grade: null };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.callback({ ...this.state });
    this.handleReset(e);
  }

  handleChange(e, stateName) {
    this.setState({
      ...this.state,
      [stateName]: Number(e.target.value) || e.target.value
    });
  }

  handleReset(e) {
    this.setState({ name: '', course: '', grade: null });
    e.currentTarget.reset();
  }

  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend" htmlFor="name">
              <span className="input-group-text pr-3"><i className="fas fa-user"></i></span>
            </div>
            <input onChange={e => this.handleChange(e, 'name')} className="form-control" type="text" name="name" id="name" required />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend" htmlFor="course">
              <span className="input-group-text pr-3"><i className="far fa-list-alt"></i></span>
            </div>
            <input onChange={e => this.handleChange(e, 'course')} className="form-control" type="text" name="course" id="course" required />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend" htmlFor="grade">
              <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
            </div>
            <input onChange={e => this.handleChange(e, 'grade')} className="form-control" type="number" name="grade" id="grade" required />
          </div>
          <div className="input-group d-flex justify-content-end">
            <button className="btn btn-primary mr-1" type="submit">Add</button>
            <button onClick={e => this.handleReset(e)} className="btn btn-secondary ml-1" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
