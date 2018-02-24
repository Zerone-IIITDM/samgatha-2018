import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../FirebaseUi/firebaseConfig';

const PasswordForgotPage = () => {
    return(
        <PasswordForgetForm />
    );
}

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: null
        }
    }
    onSubmit = (e) => {
        const { email } = this.state;
        auth.doPasswordReset(email)
            .then(() => {
                this.setState({email: '', error: null});
            })
            .catch(error => {
                console.log(error);
            });
        e.preventDefault();
    }

    render() {
        const isInvalid = email === '';
        return(
            <form onSubmit={this.onSubmit}>
            <input
              value={this.state.email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Email Address"
            />
            <button disabled={isInvalid} type="submit">
              Reset My Password
            </button>
          </form>
        );
    }
}