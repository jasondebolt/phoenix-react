
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component {

  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger': ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error: ''}
      </div>
    )
  }

  onSubmit(values) {
    const user = this.props.user;
    this.props.createPost(user, values, () => {
      this.props.history.push('/posts');
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          foo="FOO TITLE"
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          foo="FOO CONTENT"
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/posts" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = "Enter a title!"
  }
  if (!values.content) {
    errors.content = "Enter some content!"
  }

  return errors;
}

function mapStateToProps(state, ownProps) {
  return {
     user: state.user
   }
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(connect(mapStateToProps, { createPost })(PostsNew));
