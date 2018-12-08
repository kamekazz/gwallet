import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ferchStream, editStream } from '../../store/actions'
import StreamForm from './StreamForm'

 class StreamEdit extends Component {

  componentDidMount(){
    this.props.ferchStream(this.props.match.params.id)
  }

  onSubitA = pmFormValue =>{
      this.props.editStream(this.props.match.params.id, pmFormValue)
  }
  

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title','description')}
          onSubitA={this.onSubitA} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
})

const mapDispatchToProps = {
  ferchStream,editStream
}


export default connect(mapStateToProps,mapDispatchToProps)(StreamEdit)