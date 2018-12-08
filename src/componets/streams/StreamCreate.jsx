import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../store/actions'
import StreamForm from './StreamForm'

 class StreamCreate extends Component {

  onSubitA = (formValues)=>{
    this.props.createStream(formValues)
  }
  
  render() {

    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm  onSubitA={this.onSubitA} />
      </div>
    )
  }
}

export default connect(null,{createStream})(StreamCreate)