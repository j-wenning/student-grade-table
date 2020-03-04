import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data || { name: '', course: '', grade: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.modal) {
      this.props.patchCallback({ ...this.state });
      this.props.closeCallback();
    } else this.props.callback({ ...this.state });
    this.handleReset(e);
  }

  handleChange(e, stateName) {
    this.setState({
      ...this.state,
      [stateName]: Number(e.target.value) || e.target.value
    });
  }

  handleCancel() {
    this.props.closeCallback();
  }

  handleReset(e) {
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {
    const modalClass = this.props.modal ? {
      heading: (
        <div className="modal-header">
          <h3>Modify Grade</h3>
        </div>
      ),
      modal: 'modal show fade',
      style: { display: 'block' },
      dialog: 'modal-dialog',
      content: 'modal-content',
      body: 'modal-body',
      cancel: () => this.handleCancel()
    } : { cancel: e => this.handleReset(e) };
    return (
      <div onClick={this.props.closeCallback} className={modalClass.modal || this.props.className} style={modalClass.style}>
        <div className={modalClass.dialog}>
          <div className={modalClass.content}>
            {modalClass.heading}
            <form className={modalClass.body} onSubmit={e => this.handleSubmit(e)}>
              <div className="input-group mb-3">
                <div className="input-group-prepend" htmlFor="name">
                  <span className="input-group-text pr-3">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  onChange={e => this.handleChange(e, 'name')}
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend" htmlFor="course">
                  <span className="input-group-text pr-3">
                    <i className="far fa-list-alt" />
                  </span>
                </div>
                <input
                  onChange={e => this.handleChange(e, 'course')}
                  className="form-control"
                  type="text"
                  name="course"
                  id="course"
                  value={this.state.course}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend" htmlFor="grade">
                  <span className="input-group-text">
                    <i className="fas fa-graduation-cap" />
                  </span>
                </div>
                <input
                  onChange={e => this.handleChange(e, 'grade')}
                  className="form-control"
                  type="number"
                  name="grade"
                  id="grade"
                  value={this.state.grade}
                  required
                />
              </div>
              <div className="input-group d-flex justify-content-end">
                <button className="btn btn-primary mr-1" type="submit">Add</button>
                <button onClick={modalClass.cancel} className="btn btn-secondary ml-1" type="reset">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
