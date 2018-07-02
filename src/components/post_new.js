import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

   constructor(props){
     super(props);
   }

   renderField(field){
     return(
       <div className="form-group">
       <label>{field.label}</label>
       <input
       className="form-control"
       type="text"
       {...field.input}
       />
       </div>
     );
   }


   render(){
     return(
       <div>
       <Field
        label="Title :"
        name="title"
        component={this.renderField}
       />
       <Field
        label="Post Content :"
        name="content"
        component={this.renderField}
       />
       </div>
     );
   }

}

function validate(values){
  console.log('one');
  setTimeout(function() {
    console.log('two');
  }, 0);
  console.log('three');

  const errors = {};

  if(!values.title){
    errors.title = "Enter a title";
  }
  if(!values.content){
    errors.content = "Enter some post content";
  }
//if errors returns any exception, reudx form will not submit.
  return errors;
}

export default reduxForm({
   validate:validate,
   form: 'PostNewForm'
})(PostNew);
