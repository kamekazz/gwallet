import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ferchStreams } from '../../store/actions'



 class StreamList extends Component {

  componentDidMount(){
    this.props.ferchStreams()
  }

  renderList=()=>{
    return this.props.streams.map(stream =>(
      <div className="item" key={stream.id}>
        <i className="large middle aligned icon camera"></i>
        <div className="content">
          {stream.title}
          <div className="description">
            {stream.description}
          </div>
        </div>
      </div>
    )

    )
  }

  render() {
    return (
      <div className="ui celled list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams)   
})

const mapDispatchToProps = {
  ferchStreams
}




export default connect(mapStateToProps,mapDispatchToProps)(StreamList)