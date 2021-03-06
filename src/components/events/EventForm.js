import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../../actions/eventActions'

class EventForm extends Component {

    state = { 
        event_name: '',
        date: '',
        time: '',
        total: '',
        status: '',
        details: '',
        client_id: this.props.clientId
    }

    handleChange = e => {
      
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addEvent(this.state)
        this.setState({   
        event_name: '',
        date: '',
        time: '',
        total: '',
        status: '',
        details: ''
        })
       
    }

    render() {
        return (
            <form className= "Event-Form" onSubmit={this.handleSubmit}>
                <h3 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">Create New Event </span> </h3> 
                <label className="event-form-label">Event Name: </label>
                <input type='text' value={this.state.event_name} onChange={this.handleChange} name='event_name' required/>
                <br/>
            
                <label className="event-form-label">Date: </label>
                <input type='date' value={this.state.date} onChange={this.handleChange} start='Date.now' name='date' required/>
                <br/>

                <label className="event-form-label">Time: </label>
                <input type='time' value={this.state.time} onChange={this.handleChange} name='time' required/>
                <br/>

                <label className="event-form-label">Total: $</label>
                <input type='numeric' value={this.state.total} onChange={this.handleChange} name='total'required/>
                <br/>

            

                <label className="event-form-label">Status: </label>
                <br/>
                    <input type='radio' className = 'tentative-selection' value={"Tentative"} checked={this.state.status === "Tentative"} onChange={this.handleChange} name='status'/> <label> Tentative </label> 
                    <input type='radio' className = 'confirmed-selection' value={"Confirmed"} checked={this.state.status === "Confirmed"} onChange={this.handleChange} name='status'/> <label> Confirmed </label>
                    <input type='radio' className = 'closed-selection' value={"Closed"} checked={this.state.status === "Closed"} onChange={this.handleChange} name='status'/> <label> Closed </label> 
                    <input type='radio' className = 'cancelled-selection' value={"Cancelled"} checked={this.state.status === "Cancelled"} onChange={this.handleChange} name='status'/> <label> Cancelled </label>
                <br/>

                <label>Details:</label>
                <input type='text' value={this.state.details} onChange={this.handleChange} name='details' required/> <br /> <br />

                <input className='btn-1' type='submit' value='Create Event' />

            
            </form>
          
        );
    }
}

export default connect(null, { addEvent })(EventForm);