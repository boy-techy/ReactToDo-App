/**
 * Created by Yatindra on 3/28/2017.
 */

import React from 'react';

export default class Row extends React.Component{

    constructor(props){
        super();
        this.state={
            todoName: props.todo.todoName,
            todoDate: props.todo.todoDate,
            todoStatus: props.todo.todoStatus,
            editMode: props.todo.editMode,
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            todoName: newProps.todo.todoName,
            todoDate: newProps.todo.todoDate,
            todoStatus: newProps.todo.todoStatus,
            editMode: newProps.todo.editMode,
        });
    }

    isChecked = () =>{
        const {todoStatus:status} = this.state;
        return (status === "Pending")?false:true;
    }

    changeStatus = (event) =>{
        if(event.target.value === "on"){
            this.setState({
                todoStatus:"Completed",
            })
        }
        else{
            this.setState({
                todoStatus:"Pending",
            })
        }
    }

    validate = () =>{
        if(this.state.todoName !== "" && this.state.todoDate !== "") {
            this.props.updateRowToDo(this.state, this.props.index)
        }
        else if(this.state.todoName === ""){
            this.setState({
                err_msg: 'Please Enter Correct To-Do Name',
            })
        }
        else {
            this.setState({
                err_msg: 'Please Enter Correct To-Do Date',
            })
        }
    }

    inputChangeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render(){
        return(
            <div>
                {
                    !this.state.editMode?
                        <div>
                            <span>{this.state.todoName}</span>
                            <span>{this.state.todoDate}</span>
                            <span>{this.state.todoStatus}</span>
                            <input type="checkbox" checked={this.isChecked()} onChange={this.changeStatus}/>
                            <button onClick={() =>this.props.toggleEditMode(this.props.index)}>Edit</button>
                            <button onClick={() => this.props.deleteTodo(this.props.index)}>Delete</button>
                        </div>
                        :
                        <div >
                            <input type="text" name="todoName" value={this.state.todoName} onChange={(e) => this.inputChangeHandler(e)}/>
                            <input type="date" name="todoDate" value={this.state.todoDate} onChange={(e) => this.inputChangeHandler(e)} />
                            <button onClick={this.validate}>Update</button>
                            <span id="errorMessage">{this.state.err_msg}</span>
                        </div>
                }

            </div>
        )
    }
}