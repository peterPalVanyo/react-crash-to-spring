
import React, { Component } from "react";
import PropTypes from "prop-types";
import Todos from "./Todos";

export class TodoItem extends Component {

    getStyle = () => {
        return{
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            marginRight: '50%',
            opacity: 0.9
        }
    }


    render() {
        console.log(this.props.todo.product);
        // const {id} = this.props.todo;
        const {id, name} = this.props.todo.product;
        return(
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {' '}
                    { name }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id) }>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;