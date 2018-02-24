import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth, db } from '../FirebaseUi/firebaseConfig';

const SignUpPage = ({history}) => {
    return(
        <SignUpForm history={history} />
    );
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            college: '',
            dob: '',
            gender: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();

        const {
            firstName,
            lastName,
            email,
            passwordOne,
            passwordTwo,
            college,
            dob,
            gender
        } = this.state;

        const {
            history,
        } = this.props;

        auth.createUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                console.log(db);
                console.log(authUser.uid);
                // Create user in FirebaseDB
                    let sam_id = 'SAM18';
                    let generate_id = db.ref(`/totalUsers`);
                    generate_id.transaction((current_value) => {
                        return current_value + 1;
                    });
                    generate_id.on("value", (data) => {
                        let zeroes = 5 - data.val().toString().length;
                        while(zeroes > 0) {
                            sam_id = sam_id + '0';
                            zeroes = zeroes - 1;
                        }
                        sam_id = sam_id + data.val().toString();
                    });
                    db.ref(`/users/${authUser.uid}`).set({
                        firstName,
                        lastName,
                        email,
                        college,
                        dob,
                        gender,
                        sam_id
                    })
                    .then(() => {
                        this.setState({
                            firstName: '',
                            lastName: '',
                            email: '',
                            passwordOne: '',
                            passwordTwo: '',
                            college: '',
                            dob: '',
                            gender: ''
                        })
                        history.push('/');
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                alert(error);
                console.log(error);
            });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    render() {
        const {
            firstName,
            lastName,
            email,
            passwordOne,
            passwordTwo,
            college,
            dob,
            gender
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';

        return(
            <form onSubmit={this.onSubmit} className="signInForm">
                <div className="signInHeader">
                    REGISTER
                </div>
                <input
                    value={this.state.name}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <input
                    value={this.state.name}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <input
                    value={this.state.email}
                    type="text"
                    placeholder="Email ID"
                    name="email"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <input
                    value={this.state.passwordOne}
                    type="password"
                    placeholder="Password"
                    name="passwordOne"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <input
                    value={this.state.passwordTwo}
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordTwo"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <input
                    value={this.state.college}
                    type="text"
                    placeholder="College"
                    name="college"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <input
                    value={this.state.dob}
                    type="text"
                    placeholder="Date of Birth"
                    name="dob"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <input
                    value={this.state.gender}
                    type="text"
                    placeholder="Gender"
                    name="gender"
                    onChange={this.handleChange}
                    className="emailField"
                /><br />
                <button disabled={isInvalid} type="submit" className="signInButton">
                    Register
                </button>
            </form>
        );
    }
}

export default withRouter(SignUpPage);
export {
    SignUpForm,
}