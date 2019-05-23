import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Welcome from './components/pages/Welcome';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';


class App extends Component {

    state={
        todos:[{
            id: 1,
            title: 'soap',
            completed: false
        },
            {
                id: 2,
                title: 'towel',
                completed: false
            },
            {
                id: 3,
                title: 'bred',
                completed: false
            },
            {
                id: 4,
                title: 'vine',
                completed: false
            },]
    }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //         .then(res => this.setState({ todos: res.data}))
    // }

    //TOGGLE COMPLETE
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
            })})
    }


    // add new item
    // the face json version
    addTodo = (title) => {
        axios.post("http://localhost:8080/todos", {
            title: title,
            complited: false
        }, {headers:{'Content-Type': 'application/json'}})
            .then(res => this.setState({todos:
                    [...this.state.todos, res.data]}));
    }

    // addTodo = (title) => {
    //     const newTodo = {
    //         id: uuid.v4(),
    //         title,
    //         completed: false
    //     }
    //     this.setState({ todos: [...this.state.todos, newTodo]});
    // }

    //the fake json version
    //delete the item
    // delTodo = (id) => {
    //     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //         .then(res => this.setState({todos: [...this.state.todos.filter(
    //             todo  => todo.id !== id
    //             )]}));
    // }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                            </React.Fragment>
                            )} />
                        <Route path="/about" component={About}/>
                        <Route path="/welcome" component={Welcome}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
