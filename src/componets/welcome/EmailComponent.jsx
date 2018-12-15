import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

 class EmailComponent extends Component {

state={
  email:''
}
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    return (
      <form noValidate autoComplete="off"  style={{display:'flex',alignItems:'center',paddingLeft:'5px',paddingRight:'5px'}} >
        <TextField
          id="outlined-name"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          variant="outlined"
          style={{flexGrow: '2',marginRight:'9px',backgroundColor:'white',width:'300px'}}
        />
        <Button id="Get-Started-button" variant="contained" color="primary" style={{flexGrow: '1',height:'56px'}} >
          Get Started
        </Button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailComponent)
