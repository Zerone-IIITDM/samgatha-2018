import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth, db } from '../FirebaseUi/firebaseConfig';

const SignUpPage = ({ history }) => {
    return (
        <SignUpForm history={history} />
    );
}
var samgatha = null;

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
            gender: '',
            backend_id: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();

        let {
            firstName,
            lastName,
            email,
            passwordOne,
            passwordTwo,
            college,
            dob,
            gender,
            backend_id
        } = this.state;

        const {
            history,
        } = this.props;

        var sam_id = 'SAM18';
        var id = '';
        var value = 0;
        var samgatha = '';
        let generate_id = db.ref(`totalUsers`);
        generate_id.transaction((current_value) => {
            console.log(`current value: ${current_value}`);
            if (!current_value) {
                current_value = 0;
            }
            return current_value + 1;
        });
        
        let update_id = db.ref(`totalUsers`);
        let genCounter = 0;
        update_id.on("value", (data) => {

            value = data.val();
            id = value;
            console.log(`SAM ID before update: ${id}`);
            if(genCounter == 0 ){
                auth.createUserWithEmailAndPassword(email, passwordOne)
                .then(authUser => {
                    console.log(db);
                    console.log(authUser.uid);
                    // Generate SAM ID
                    let zeroes = 5 - id.toString().length;
                    while (zeroes > 0) {
                        sam_id = sam_id + '0';
                        zeroes = zeroes - 1;
                    }
                    sam_id = sam_id + id.toString();
                    /* console.log(`SAM ID after update: ${id}`);
                    console.log(`Snapshot: ${value}`);
                    console.log(`SAM ID: ${sam_id}`);
                    console.log(email); */
                    
                    fetch('/sendEmail', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: email,
                            name: firstName,
                            id: sam_id,
                        })
                    })
                    .then((res) => res.json())
                    .then((resJson) => {
                        if (resJson.success) {
                            console.log(`Form sent to backend`);
                        }
                        else {
                            console.log(`Form not sent to backend`);
                        }
                    })
                    .catch((err) => {
                        console.log(`Error: ${err}`);
                    });
                    // Create user in FirebaseDB
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

                genCounter++;

            }


        });
            /* let zeroes = 5 - id.toString().length;
                while (zeroes > 0) {
                    sam_id = sam_id + '0';
                    zeroes = zeroes - 1;
                }
            sam_id = sam_id + id.toString(); */

            // send POST request to backend for sending email
            
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            college: '',
            dob: '',
            gender: ''
        });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    render() {
        let {
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

        return (
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
                    type="date"
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
                    list="data"
                    autoComplete="off"
                />
                <datalist id="data">
                    <option value="Male" />
                    <option value="Female" />
                    <option value="Others" />
                </datalist>
                <br />
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