import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <form>
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
                    name="tags"
                    label="Post Content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

// reduxForm works like redux 'connect'.
// The argument of it is the form 'name'
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);
