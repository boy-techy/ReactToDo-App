/**
 * Created by Yatindra on 3/28/2017.
 */

import React from 'react';
import '../content/NewToDo.css';

export default class NewToDo extends React.Component{

    constructor(){
        super();
        this.state={
            todoName: '',
            todoDate: '',
            todoStatus: 'Pending',
            toggleAdd: false,
        }
    }

    componentWillReceiveProps(){
        this.setState({
            todoName: '',
            todoDate: '',
            toggleAdd: true,
            err_msg: '',
        })
    }

    inputChangeHandler =(event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    validate = () =>{
        const {todoName,todoDate} = this.state;
        if(todoName !== "" && todoDate !== ""){
            this.props.addNewToDo(this.state);
        }
        else if(todoName === ""){
            this.setState({
                err_msg: 'Please Enter Valid To-Do'
            })
        }
        else{
            this.setState({
                err_msg: 'Please Enter Valid To-Do Date',
            })
        }
    }

    toggleAdd =() =>{
        this.setState({
            toggleAdd: !this.state.toggleAdd,
        });
    }


    render(){
        return(
            <div className="todoContainer">
                <button onClick={this.toggleAdd}>NewToDo</button>
                {
                    this.state.toggleAdd?
                        <div id="newToDo">
                            <input type="text" value={this.state.todoName} name="todoName"
                                   placeholder="Name Of ToDo" onChange={(event)=>this.inputChangeHandler(event)} />
                            <input type="date" value={this.state.todoDate} name="todoDate" onChange={(event)=>this.inputChangeHandler(event)} />
                            <button onClick={this.validate}>ADD</button>
                            <span id="errorMessage">{this.state.err_msg}</span>
                        </div>
                        :
                        <span></span>
                }
            </div>
        )
    }
}