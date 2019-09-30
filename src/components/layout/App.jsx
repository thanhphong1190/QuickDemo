import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainApp from './main/MainApp'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={MainApp} />
          <Route path="/deposit" component={MainApp} />
          <Route path="/withdraw" component={MainApp} />
          <Route path="/transaction-history" component={MainApp} />
          <Route path="/total-balance" component={MainApp} />
          <Route render={() => <div className="NotFoundMessage">404 Page Not Found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
