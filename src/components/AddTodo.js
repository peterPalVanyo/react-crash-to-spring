import React, { Component } from "react"
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

export class AddTodo extends Component {

    state = {
        title: ''
    }

    //setting the value whatever we type in, title: e.target.value
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    //prevent from automatically submit and call props method
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="title"
                       placeholder="New staff to buy..."
                       style={{flex: '10', padding: '5px'}}
                       value={this.state.title}
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