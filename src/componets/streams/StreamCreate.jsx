import React, { Component } from 'react'

import  { Field,reduxForm } from 'redux-form'
import { connect } from 'react-redux'


import { createStream } from '../../store/actions'



 class StreamCreate extends Component {


  hRenderError({error,touched}){
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }


  renderInpot=({input,label,meta})=>{
    return(
      <div className={meta.error ? 'field' : 'field error'}>
        <label >{label}</label>
        <input {...input}  autoComplete="off" />
        <div>{this.hRenderError(meta)}</div>
      </div>
      
    )    
  }


  onSubitA = (formValues)=>{
    this.props.createStream(formValues)
  }
  
  render() {

    return (
      <form
       onSubmit={this.props.handleSubmit(this.onSubitA)}
        className="ui form error"
      >
        <Field name="title"  component={this.renderInpot} label="Enter Title" />
        <Field name="description" component={this.renderInpot} label="Enter description" />

        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) =>{
  const errors ={}
  if (!formValues.title) {
    errors.title= 'you must enter a title'
  }
  if (!formValues.description) {
    errors.description= 'you must enter a description'
  }
  return errors
}





const formWrapped = reduxForm({
  form:'streamCreate',
  validate:validate
})(StreamCreate)


export default connect(null,{createStream})(formWrapped)