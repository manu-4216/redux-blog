import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field; // destructure meta and its sub-properties
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    label="Post Title"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <Link to="/" className="btn btn-danger">
                    Cancel
                </Link>
            </form>
        );
    }
}

// 'values' contains all the fields names ( { title: '...', categories: '...', content: '...')
function validate(values) {
    const errors = {};

    // Validate the input from 'values'
    if (!values.title) {
        errors.title = 'Enter a title!';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux-form assumes invalid form
    return errors;
}

// reduxForm works like redux 'connect'.
// The argument of it is the form 'name'
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, { createPost })(PostsNew));
