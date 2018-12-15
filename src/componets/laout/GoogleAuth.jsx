import React, { Component } from 'react'
import  { signIn, signOut } from '../../store/actions'
import { connect } from 'react-redux'
import  apiKiys  from '../../conf/confinkiys'

import LockIcon from '@material-ui/icons/Lock';
import LoopIcon from '@material-ui/icons/Loop';

import Button from '@material-ui/core/Button';


 class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
          window.gapi.client
            .init({
              clientId:
              apiKiys.clientId,
              scope: 'email'
            })
            .then(() => {
              this.auth = window.gapi.auth2.getAuthInstance()
    
              this.onAuthChange(this.auth.isSignedIn.get())
              this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
      }
    
      onAuthChange = isSignedIn => {
        if (isSignedIn) {
          this.props.signIn(this.auth.currentUser.get().getId(),this.auth.currentUser.get().w3)
        } else {
          this.props.signOut()
        }
      };
    
      onSignInClick = () => {
        this.auth.signIn();
      }
    
      onSignOutClick = () => {
        this.auth.signOut()
      }
    
      renderAuthButton() {
        if (this.props.isSignedIn === null) {
          return null;
        } else if (this.props.isSignedIn) {
          return (
            <Button variant="contained" color="secondary" onClick={this.onSignOutClick} >
              <LoopIcon />
              Sign Out
            </Button>
          )
        } else {
          return (
            <Button variant="contained" color="secondary"  onClick={this.onSignInClick} >
              <LockIcon />
              Sign In with Google
            </Button>
          )
        }
      }
    
      render() {
        return <div>{this.renderAuthButton()}</div>;
      }
}
    
const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn,
    userInfo: state.auth.userInfo
})

const mapDispatchToProps = {
    signIn, signOut
}


export default connect(mapStateToProps,mapDispatchToProps)(GoogleAuth)