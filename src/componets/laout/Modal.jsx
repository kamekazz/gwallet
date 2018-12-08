import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'



export class Modal extends Component {


  render() {
    const {title,content,actons,onDismiss} = this.props


    return ReactDOM.createPortal(
        <div onClick={onDismiss} 
            className="ui dimmer modals visible active"
        >
            <div onClick={(event)=> event.stopPropagation()}
                className="ui standard modal visible active"
            >
                <div className="header">{title}</div>
                <div className="content">{content}</div>
                {actons}
            </div>
        </div>,
        document.querySelector('#modal')
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
