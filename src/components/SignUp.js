/**
 * Created by Yatindra on 3/28/2017.
 */

import React from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import '../content/CustomInput.css';
import '../content/CustomButton.css';
export default class SignUp extends React.Component{

    constructor(){
        super();
        this.state={

        }
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    onClick =() =>{
        if(this.state.password === this.state.repassword) {
            this.setState({
                err_msg: '',
                succ_msg: "Sign Up Successfully!!!!",
            },this.props.addNewUser(this.state))
        }
        else{
            this.setState({
                succ_msg: '',
                err_msg: 'Password MisMatch'
            })
        }
    }

    render(){
        return(
            <form id="signUpForm">
                <div>
                    <CustomInput type="text"
                                 placeholder="First Name"
                                 name="firstName"
                                 inputHandler={this.inputHandler} />

                    <CustomInput type="text"
                                 placeholder="Last Name"
                                 name="lastName" inputHandler={this.inputHandler} />
                </div>
                    <CustomInput type="text" placeholder="Enter Mobile Number or EmailAddress"
                                 inputHandler={this.inputHandler} name="contactDetail"/>

                    <CustomInput type="date" placeholder="Date Of Birth"
                                 inputHandler={this.inputHandler} name="dateOfBirth"/>

                    <CustomInput type="password" placeholder="Enter Your Password"
                                 inputHandler={this.inputHandler} name="password"/>

                    <CustomInput type="password" placeholder="ReEnter Your Password"
                                 name="repassword" inputHandler={this.inputHandler}/>

                    <span id="errorMessage">{this.state.err_msg}</span>
                <span id="successMessage">{this.state.succ_msg}</span>
                    <CustomButton type="button" value="Sign Up"  onClick={this.onClick} />
            </form>
        );
    }
}