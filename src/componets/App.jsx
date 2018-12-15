import React, { Component } from 'react'
import { Router, Route,Switch} from 'react-router-dom'


import history from '../history';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Foot } from './laout/Foot';
import TemporaryDrawer from './laout/TemporaryDrawer';
import  FlashMessagesList  from './laout/FlashMessagesList';

import Mian from './welcome/Mian';

const theme = createMuiTheme({
  
  palette: {
    primary: { main: '#143642' }, 
    secondary: { main: '#0F8B8D' }, 
    error: { main: '#EC9A29' },
  },
  typography: {
    useNextVariants: true,
  }
});

 class App extends Component {

  render() {

    return (
      <div>
      <MuiThemeProvider theme={theme}>
          <Router history={history}>
          <div>
            <TemporaryDrawer>
            <FlashMessagesList />
              <Switch >
                <Route path="/" exact  component={Mian} />
              </Switch>
              <Foot />
            </TemporaryDrawer>
          </div>
          </Router>
      </MuiThemeProvider>
      </div>
    )
  }
}
export default App