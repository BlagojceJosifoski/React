import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDashboard from './components/Dashboard';
import SideNavigation from './components/Navigation';
import Report from './components/Report';
import { Switch, Route, BrowserRouter } from "react-router-dom";


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="side_navigation">
            <SideNavigation />
          </div>
          <div className="main_content">
            <Switch>
              <Route exact path="/" component={MyDashboard} />
              <Route path="/report" component={Report} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
