import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Foot extends Component {


  render() {
    return (
      <div style={{backgroundColor:'#143642'}}>
        Foot
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Foot)
