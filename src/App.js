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
        todos: {lineItems: [{
            id: 1,
            product: {
                id: 0,
                name: 'towel'
            },
            completed: false
            },
            {
                id: 2,
                product: {
                    id: 1,
                    name: 'towel'
                },
                completed: false
            },
            {
                id: 3,
                product: {
                    id: 2,
                    name: 'towel'
                },
                completed: false
            },
            {
                id: 4,
                product: {
                    id: 3,
                    name: 'towel'
                },
                completed: false
            },],},
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
        axios.get('http://localhost:8080/shopping-list/all')
            .then(res => {
                this.setState({ todos: res.data });
                console.log(this.state.todos);
            });
        axios.get('http://localhost:8080/shop/all')
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
        axios.post("http://localhost:8080/line-item/add", {
            shoppingList: this.state.todos,
            quantity: 2,
            product: {name: name}
        }, {headers:{'Content-Type': 'application/json'}})
            .then(res => this.setState({todos:
                   {lineItems: [...this.state.todos.lineItems, res.data]}}));
    }


    //here the groupid and the url are correct
    //http://192.168.160.130:8080/shopping-list/add

    addList = (name, address) => {
        console.log(address);
        axios.post("http://localhost:8080/shop/add", {
            name: name,
            address: address,
            openingHours: [],
            tags: []
        }, {headers:{'Content-Type': 'application/json'}})
            .then(res => this.setState({toshops:
                    [...this.state.toshops, res.data]}));
    }

    // editShop = () => {
    //     console.log("hello");
    // }

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
                                <Todos todos={this.state.todos.lineItems} markComplete={this.markComplete} delTodo={this.delTodo} />
                            </React.Fragment>
                            )} />
                        {/*<Route path="/about" component={About}/>*/}
                        <Route path="/welcome" component={Welcome}/>

                        <Route path="/shops" render={props => (
                            <React.Fragment>
                                <AddList addList={this.addList}/>
                                <ToLIsts tolists={this.state.toshops} editShop={this.editShop}/>
                            </React.Fragment>
                        )}/>

                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
