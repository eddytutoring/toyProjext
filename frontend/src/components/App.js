import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, TutorPage } from 'components';


class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/tutor" component={TutorPage}/>
      </div>
    );
  }
}

export default App;
