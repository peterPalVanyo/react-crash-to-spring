import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {
    render() {

        return(
            <div style={listStyle}>
                <p style={ pStyle }>{ this.props.list.groupId }</p>
            </div>
    )
    }
}

ListItem.propTypes = {
    list: PropTypes.object.isRequired
}

const pStyle = {
    textAlign: 'center',
    opacity: 1
}

const listStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    marginLeft: '50%',
    opacity: 0.9
}

export default ListItem