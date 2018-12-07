import React, { Component } from 'react'
import { Router, Route,Switch} from 'react-router-dom'
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
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
                <Route path="/streams/new" exact  component={StreamCreate} />
                <Route path="/streams/edit" exact  component={StreamEdit} />
                <Route path="/streams/delete"   component={StreamDelete} />
                <Route path="/streams/show"   component={StreamShow} />
              </Switch>
          </div>
          </Router>
      </div>

    )
  }
}
export default App