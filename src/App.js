import React from 'react';
import {Component} from 'react';
import {
  Switch,
    Route,
  } from "react-router-dom";
  import { connect } from 'react-redux'
  import EventsContainer from './containers/EventsContainer'
  import ClientsContainer from './containers/ClientsContainer'
  import NavBar from './components/NavBar'
  import EventForm from './components/events/EventForm'
  import {fetchEvents} from './actions/eventActions'
  // import Home from './components/Home'
import MainContainer from './containers/MainContainer';


 

    class App extends Component {

        componentDidMount() {
    
        this.props.dispatchFetchEvents()
        }

        render() {
            return (
                     <div>
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
<h2>Events</h2>
<EventsContainer />
</div>
);
}

const mapDispatchToProps = (dispatch) => {
    return {dispatchFetchEvents: () => dispatch(fetchEvents())}
  }
  
  export default connect(null, mapDispatchToProps)(App)