import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CardItem extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        CardItem
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)
