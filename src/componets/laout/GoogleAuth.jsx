import React, { Component } from 'react'
import { connect } from 'react-redux'
import  apiKiys  from '../../conf/confinkiys'

import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import * as actions from '../../store/actions'


 class GoogleAuth extends Component {

  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

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
        this.handleClose()
        this.props.newMassages(' User Logout',true)
      }

      rdUserInfo = ()=>{
        const { anchorEl } = this.state;
        const userInfo = this.props.userInfo 
        return(
          <div>
          <Button variant="contained" color="secondary" 
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <Grid container justify="center" alignItems="center">
              <Avatar alt="Remy Sharp" srcSet={userInfo.Paa} style={{marginRight:'5px'}} />
              {userInfo.ofa}
            </Grid>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.onSignOutClick}>Logout</MenuItem>
          </Menu>
          </div>
        )
      }
    
      renderAuthButton() {
        if (this.props.isSignedIn === null) {
          return null;
        } else if (this.props.isSignedIn) {
          return (
            <div>
              {this.rdUserInfo()}
            </div>
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




export default connect(mapStateToProps,actions)(GoogleAuth)