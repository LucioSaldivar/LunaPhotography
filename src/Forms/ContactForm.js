import React,{ Component } from 'react';

import './Sytles/ContactForm.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            emial: '',
            phone: '',
            city: '',
            message: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className="ContactForm">
                <form method="POST" onSubmit={this.handleSubmit} >
                    <div className="inputs">
                        <input type="text" placeholder="Name" name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                        <input type="email" placeholder="Email" name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange} />
                        <input type="text" placeholder="Phone" name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange} />
                        <input type="text" placeholder="City" name="city"
                            value={this.state.city}
                            onChange={this.handleInputChange} />
                    </div>
                    <textarea type="text" placeholder="Message" name="message"
                        value={this.state.message}
                        onChange={this.handleInputChange} />
                    <button type="submit" name="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;

