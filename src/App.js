  import React from 'react';
  import {Component} from 'react';
  import {Switch,Route} from "react-router-dom";
  import { connect } from 'react-redux'
  import EventsContainer from './containers/EventsContainer'
  import ClientsContainer from './containers/ClientsContainer'
  import NavBar from './components/Header/NavBar'
  import EventForm from './components/events/EventForm'
  import {fetchEvents} from './actions/eventActions'
  import MainContainer from './containers/MainContainer';
  import Header from './components/Header/Header'
  import './App.css';
 

  class App extends Component {
      componentDidMount() {
      this.props.dispatchFetchEvents()
  
      }

      render() {
          return (
                  <div>
                      <br />
                        <Header />
                     
                        <NavBar />
                        
                          <Switch>
                                  <Route exact path="/"> <MainContainer/> </Route>
                                  <Route exact path="/events">< Events /> </Route>
                                  <Route path="/clients"> <ClientsContainer /> </Route>
                                  <Route exact path='/events/new' component={EventForm} />
                                
                          </Switch> 
                  </div> 
          )
      }
    
  }
  



      function Events()  {
          return (
            <div>
      
              <EventsContainer />
            </div>
      );
      }
    
      //this dispatch cause a reducer to run
      const mapDispatchToProps = (dispatch) => {
          return {dispatchFetchEvents: () => dispatch(fetchEvents())}
      }
  
  export default connect(null, mapDispatchToProps)(App)
