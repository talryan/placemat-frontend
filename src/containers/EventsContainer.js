//this will be the container = data + methods

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchEvents} from '../actions/eventActions'
import {
    Link
  } from "react-router-dom";
  import EventList from '../components/events/EventList'


class EventsContainer extends Component {
    // componentDidMount() {
    //     this.props.fetchEvents()
    // }
    render() {
        return (
            <div>
                <li>
               <EventList />
                </li>
                Put Event Calendar Here <br />
                 <Link to="/events/new">New Event</Link> <br />
            </div>
        );
    }
}

export default connect(null, {fetchEvents})(EventsContainer);