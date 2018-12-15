import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'



 class StreamList extends Component {

  componentDidMount(){
    
  }




  render() {
    return (
      <div>
        <h2>Streams</h2>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn
})

const mapDispatchToProps = {
  
}




export default connect(mapStateToProps,mapDispatchToProps)(StreamList)