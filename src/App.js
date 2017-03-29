import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import NavBar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import UserCard from './components/UserCard';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state={
            users: [],
            authentic: false,
            index: 0,
        }

        this.addNewUser = this.addNewUser.bind(this);
        this.toggleAuthentic = this.toggleAuthentic.bind(this);
    }

    addNewUser =(newUser) =>{
        newUser.todo = [];
        this.setState({
            users:[...this.state.users,newUser],
        })
    }

    isValid = (value) =>{
        let resultIndex = this.state.users.findIndex((user,index)=>{
            if(user.firstName===value.userId && user.password===value.password){
                return true;
            }
        })

        if(resultIndex !== -1) {
            this.setState({
                authentic: true,
                message:'',
                index: resultIndex,
            })
        }
        else{
            this.setState({
                message:'Invalid Credentials'
            })
        }
    }

    toggleAuthentic = (newToDo,index) =>{
        delete newToDo.username;
        let updatedUser = Object.assign({},this.state.users[index],{todo_arr: newToDo.todo_arr});
        let updated = Object.assign([],this.state.users,{[index]:updatedUser})
        this.setState({
            users: updated,
            authentic: !this.state.authentic,
        })
    }

    render() {
        const {index} = this.state;
    return (
        <Router>
            <div>
            <NavBar isValid={ this.isValid } message={ this.state.message } authentic={ this.state.authentic }
                    toggleAuthentic={this.toggleAuthentic}/>

                <Route exact path="/" render={props=>(
                    <Home {...props}
                          users={ this.state.users }
                          authentic={ this.state.authentic }
                          addNewUser={ this.addNewUser }
                          index={ this.state.index }
                    />
                ) }/>  {/**Route For Home**/}

                <Route path="/about" component={AboutUs}/>
                {
                 this.state.authentic?
                     <Route path="/todo" render={props =>(
                        <UserCard {...props} todo ={this.state.users[index].todo_arr} username={this.state.users[index].firstName}
                                  toggleAuthentic={this.toggleAuthentic} index={this.state.index}/>
                     ) }/>
                     :
                     <Redirect to="/" />
                }
            </div>
        </Router>
    );
  }
}

export default App;
