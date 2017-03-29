/**
 * Created by Yatindra on 3/28/2017.
 */

import React from 'react';
import NewToDo from './NewToDo';
import Row from './Row';

export default class UserCard extends React.Component{

    constructor(props){
        super();
        this.state={
            username: props.username,
            todo_arr: props.todo,
        }
        this.addNewToDo = this.addNewToDo.bind(this);
        this.updateRowToDo = this.updateRowToDo.bind(this);
    }

    componentWillReceiveProps(newProps){
        this.setState({
            todo_arr: newProps.todo,
        })
    }

    updateRowToDo = (new_to_do,index) => {
        new_to_do.editMode = false;
        delete new_to_do.err_msg;
        let temp = Object.assign([],this.state.todo_arr,{[index]:new_to_do})
        this.setState({
            todo_arr:temp,
        });
    }

    toggleEditMode = (index) =>{
        let obj = this.state.todo_arr[index];
        obj.editMode = true;
        let temp_todo = Object.assign([],this.state.todo_arr,{[index]:obj});
        this.setState({
            todo_arr: temp_todo,
        })
    }

    deleteTodo = (index) =>{
        let {todo_arr:temp_arr} = this.state;
        temp_arr.splice(index,1);
        this.setState({
            todo_arr: temp_arr,
        })
    }

    addNewToDo = (newTodo) =>{
        delete newTodo.err_msg;
        delete newTodo.toggleAdd;
        this.setState({
            todo_arr: [...this.state.todo_arr, newTodo],
        })
    }

    render(){
        return(
            <div>
                <NewToDo addNewToDo={this.addNewToDo}/>
                <button onClick={()=>this.props.toggleAuthentic(this.state,this.props.index)}>LogOut</button>
                {
                    this.state.todo_arr.map((todo,index)=>(
                        todo?
                        <Row key={index} todo={todo} index={index} updateRowToDo={this.updateRowToDo}
                             toggleEditMode={this.toggleEditMode} deleteTodo={this.deleteTodo} />
                        :
                        <span>Nothing is Here</span>
                        ))
                }
            </div>
        )
    }
}
UserCard.defaultProps={
    todo:[],
}