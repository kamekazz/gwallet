import React, { Component } from 'react'
import { BrowserRouter, Route,Switch} from 'react-router-dom'
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './laout/Header';

 class App extends Component {

  render() {

    return (

      <div>
          <BrowserRouter>
          <div>
            <Header />
             <div style={{padding:'20px'}}>
              <Switch >
                <Route path="/" exact  component={StreamList} />
                <Route path="/streams/new" exact  component={StreamCreate} />
                <Route path="/streams/edit" exact  component={StreamEdit} />
                <Route path="/streams/delete"   component={StreamDelete} />
                <Route path="/streams/show"   component={StreamShow} />
              </Switch>
             </div>

          </div>
          </BrowserRouter>
      </div>

    )
  }
}
export default App