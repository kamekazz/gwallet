import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import EmailComponent from './EmailComponent';
import  CardList  from './CardList';

export class Mian extends Component {


  render() {
    return (
        <div id="Mian" >
        <Grid container direction="column" justify="center" alignItems="center" >
            <Grid item xs={12} style={{padding:15}}>
                <Typography style={{color:"white",textAlign:'center',marginTop:'25px'}} component="h2" variant="h3" gutterBottom>
                    Send and Receive  Cryptocurrency
                </Typography>
                <Typography className="text-pere" style={{textAlign:'center',marginTop:'12px'}} color="primary" variant="h6" gutterBottom>
                    G-Wallet  is the easiest place to Send and Receive cryptocurrency the Safeway 100% Garantie.
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <EmailComponent />
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" >
                <CardList />
            </Grid>
        </Grid>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Mian)

