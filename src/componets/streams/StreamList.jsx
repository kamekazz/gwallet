import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ferchStreams } from '../../store/actions'
import { Link } from 'react-router-dom'



 class StreamList extends Component {

  componentDidMount(){
    this.props.ferchStreams()
  }


  renderAdmin=(st)=>{
    if (st.userId === this.props.currentUserId) {
      return(
        <div>
          <Link className="ui button primary" to={`/streams/edit/${st.id}`}>EDIT</Link>
          <Link  to={`/streams/delete/${st.id}`}  className="ui button negative">
            delete
          </Link>
        </div>
      )
    }
  }

  rdCreate=()=>{
    if (this.props.isSignedIn) {
        return(
          <div style={{textAlign:'right'}}>
            <Link to="/streams/new" className="ui button primary">
              Create Stream
            </Link>
          </div>
        )
    }
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
        {this.renderAdmin(stream)}
      </div>
    )

    )
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.rdCreate()}
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {
  ferchStreams
}




export default connect(mapStateToProps,mapDispatchToProps)(StreamList)