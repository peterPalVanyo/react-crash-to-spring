import React, { Component } from "react"
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

export class AddTodo extends Component {

    state = {
        name: ''
    }

    //setting the value whatever we type in, name: e.target.value
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    //prevent from automatically submit and call props method
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.name);
        this.setState({name: ''});
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="name"
                       placeholder="New staff to buy..."
                       style={{flex: '10', padding: '5px'}}
                       value={this.state.name}
                       onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    AdTodo: PropTypes.func.isRequired
}

export default AddTodo;