import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import ToLIsts from './components/ToLists';
import AddTodo from './components/AddTodo';
import AddList from './components/AddList';
import Header from './components/layout/Header';
import Welcome from './components/pages/Welcome';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';


class App extends Component {

    state={
        todos:[{
            id: 1,
            name: 'soap',
            completed: false
            },
            {
                id: 2,
                name: 'towel',
                completed: false
            },
            {
                id: 3,
                name: 'bred',
                completed: false
            },
            {
                id: 4,
                name: 'vine',
                completed: false
            },],
        toshops:[{
            id: 1,
            name: 'FMCG',
        },
            {
                id: 2,
                name: 'Travel',
            },
            {
                id: 3,
                name: 'Food',
            },
            ]
    }

    componentDidMount() {
        axios.get('http://localhost:8080/shopitem/exist')
            .then(res => this.setState({ todos: res.data}));
        axios.get('http://localhost:8080/shops/exist')
            .then(res => this.setState({ toshops: res.data}));
    }

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
    //http://192.168.160.159:8080/product/add
    addTodo = (name) => {
        axios.post("http://localhost:8080/shopitem", {
            name: name
        }, {headers:{'Content-Type': 'application/json'}})
            .then(res => this.setState({todos:
                    [...this.state.todos, res.data]}));
    }


    //here the groupid and the url are correct
    //http://192.168.160.130:8080/shopping-list/add

    addList = (name) => {
        axios.post("http://localhost:8080/shops", {
            name: name
        }, {headers:{'Content-Type': 'application/json'}})
            .then(res => this.setState({toshops:
                    [...this.state.toshops, res.data]}));
    }

    // addTodo = (name) => {
    //     const newTodo = {
    //         id: uuid.v4(),
    //         name,
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
                        {/*<Route path="/about" component={About}/>*/}
                        <Route path="/welcome" component={Welcome}/>

                        <Route path="/shops" render={props => (
                            <React.Fragment>
                                <AddList addList={this.addList}/>
                                <ToLIsts tolists={this.state.toshops}/>
                            </React.Fragment>
                        )}/>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
