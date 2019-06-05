import React, { Component } from "react";
import ListItem from "./ListItem";
import PropTypes from 'prop-types';

class ToLists extends Component{
    render() {
        return this.props.tolists.map((list) => (
            <ListItem key={list.id} list = {list} />
        ));
    }
}

ToLists.propTypes = {
    tolists: PropTypes.array.isRequired
}

export default ToLists;
