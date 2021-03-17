import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addClient } from '../../actions/clientActions'


class ClientForm extends Component {

    state = { 
        first_name: '',
        last_name: '',
        phone_number: '',
        email: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addClient(this.state)
        e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <strong> Create New Client</strong> <br/>
                <label>First Name </label>
                <input type='text' value={this.state.first_name} onChange={this.handleChange} name='first_name' required/>
                <br/>

                <label>Last Name </label>
                <input type='text' value={this.state.last_name} onChange={this.handleChange} name='last_name' required/>
                <br/>

                <label>Phone Number</label>
                <input type='text' value={this.state.phone_number} onChange={this.handleChange} name='phone_number'required/>
                <br/>

                <label>Email</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name='email'required/>
                <br/>
                
              

                <input type='submit' value='Create Client' />

            
            </form>
          
        );
    }
}

export default connect(null, { addClient })(ClientForm);