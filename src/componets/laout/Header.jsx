import React, { Component } from 'react'
import GoogleAuth from './GoogleAuth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default class Header extends Component {
  render() {

    return (
        <AppBar position="static">
        <Toolbar>
            <IconButton  color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" style={{flexGrow:1}} >
                    News
            </Typography>
            <div >
                <GoogleAuth />
            </div>
        </Toolbar>    
        </AppBar>
    )
  }
}
