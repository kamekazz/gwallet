import React, { Component } from 'react'
import { Router, Route,Switch} from 'react-router-dom'
import StreamList from './streams/StreamList';
import Header from './laout/Header';
import history from '../history';



 class App extends Component {

  render() {

    return (

      <div className="ui container">
          <Router history={history}>
          <div>
            <Header />
              <Switch >
                <Route path="/" exact  component={StreamList} />
              </Switch>
          </div>
          </Router>
      </div>

    )
  }
}
export default App