import React, { Component } from 'react'
import Modal from '../laout/Modal'
import history from '../../history'

export default class StreamDelete extends Component {
  render() {
    const actons =(
      <div  className="actions">
        <button  className="ui button negative">Delete</button>
        <button onClick={()=> history.push('/')} className="ui  button">Cancel</button>
      </div>
    )



    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actons={actons}
          onDismiss={()=> history.push('/')}
        />
        
      </div>
    )
  }
}
