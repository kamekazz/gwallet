import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  CardItem  from './CardItem';

class CardList extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        CardList
        <CardItem />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
