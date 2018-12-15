import React, { Component } from 'react'
import { Router, Route,Switch} from 'react-router-dom'
import StreamList from './streams/StreamList';
import Header from './laout/Header';
import history from '../history';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' }, 
    secondary: { main: '#E54B4B' }, 
    error: { main: '#ff0000' },
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
            <Header />
              <Switch >
                <Route path="/" exact  component={StreamList} />
              </Switch>
          </div>
          </Router>
      </MuiThemeProvider>
      </div>
    )
  }
}
export default App