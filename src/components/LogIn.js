/**
 * Created by Yatindra on 3/27/2017.
 */

import React from 'react';
export default class LogIn extends React.Component{

    constructor(){
        super();
        this.state={

        }
    }

    inputChangeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render(){
        return(
            <ul id="logInUl">
                <li><input type="text" className="logIn" name="userId" placeholder="UserName" onChange={this.inputChangeHandler} /> </li>
                <li><input type="text" className="logIn" name="password" placeholder="Password" onChange={this.inputChangeHandler} /> </li>
                <li><input type="button" value='Log In' className="logInButton" onClick={()=>this.props.isValid(this.state)}/> </li>
            </ul>
        );
    }
}