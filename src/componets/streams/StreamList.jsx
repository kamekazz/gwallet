import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import * as actions from '../../store/actions'


 class StreamList extends Component {

  componentDidMount(){
    
  }

  onClickTrue =()=>{
    this.props.newMassages('true',true)
  }

  onClickfalsee =()=>{
    this.props.newMassages('false',false)
  }




  render() {
    return (
      <div>
        <button onClick={this.onClickTrue}>true</button>
        <button onClick={this.onClickfalsee}>false</button>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn
})






export default connect(mapStateToProps,actions)(StreamList)