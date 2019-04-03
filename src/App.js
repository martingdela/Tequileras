import React, { Component } from 'react';

/* React-DOM Router */
import {BrowserRouter as Router, Route} from 'react-router-dom'

/* Components */
import NavBar from './components/NavBar'

/** Pages */
import HomePage from './pages/HomePage'
import UseCase1 from './pages/UseCase1'
import UseCase3 from './pages/UseCase3'
import UseCase4 from './pages/UseCase4'

class App extends Component {
  render() {
    return (
      <body style ={{backgroundColor: "#000"}}>
      <Router >
        {/** Navigation Bar */}
        <NavBar/>
        {/** Homepage and use cases 2 and 3*/}
        <Route exact path="/" component={HomePage}/>
        {/** Extended use case 1 */}
        <Route path="/tequila/:serieId/:username" component={
          ({match}) => <UseCase1 serieId={match.params.serieId} username={match.params.username}/>
        }/>
        {/** Use case 3 */}
        <Route path="/tequilera/:tequileraName" component={
          ({match}) => <UseCase3 tequileraName={match.params.tequileraName}/>
        }/>
        {/** Use case 4 */}
        <Route exact path="/historial/:username" component={ 
          ({match}) => <UseCase4 username={match.params.username}/>
        }/>
        
      </Router>
      </body>
    );
  }
}

export default App;
