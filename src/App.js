import React, { Component } from 'react';

/* React-DOM Router */
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

/* Components */
import NavBar from './components/NavBar'

/** Pages */
import HomePage from './pages/HomePage'
import UseCase1 from './pages/UseCase1'
import UseCase3 from './pages/UseCase3'

class App extends Component {
  render() {
    return (
      <Router>
        {/** Navigation Bar */}
        <NavBar/>
        {/** Homepage and use cases 2 and 3*/}
        <Route exact path="/" component={HomePage}/>
        {/** Extended use case 1 */}
        <Route path="/tequila/:serieId" component={
          ({match}) => <UseCase1 serieId={match.params.serieId}/>
        }/>
        {/** Use case 3 */}
        <Route path="/tequilera/:tequileraName" component={
          ({match}) => <UseCase3 tequileraName={match.params.tequileraName}/>
        }/>
        
      </Router>
    );
  }
}

export default App;
