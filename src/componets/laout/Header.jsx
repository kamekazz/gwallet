import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import GoogleAuth from '../GoogleAuth';


export default class Header extends Component {
  render() {

    return (
        <div className="ui sevondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Steams
                </Link>
                <GoogleAuth />
            </div>
            
        </div>
    )
  }
}
