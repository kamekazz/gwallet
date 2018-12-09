import React, { Component } from 'react'
import Modal from '../laout/Modal'
import history from '../../history'
import { connect } from 'react-redux'
import { ferchStream,deleteStream } from '../../store/actions'


 class StreamDelete extends Component {

  componentDidMount(){
    this.props.ferchStream(this.props.match.params.id)
  }

  render() {

    const actons =(
      <div  className="actions">
        <button  onClick={()=> this.props.deleteStream(this.props.match.params.id)}
         className="ui button negative">Delete</button>
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



const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  ferchStream,deleteStream
}


export default connect(mapStateToProps,mapDispatchToProps)(StreamDelete)
