import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ListItem extends Component {

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.editShop;
    // }

    render() {
        const {id, name, address} = this.props.list;
        return(
            <div style={listStyle}>
                <p style={ pStyle }>{ name }</p>
                <input type="submit" value="edit" className="btn" style={{flex: '1'}}/>
            </div>
    )
    }
}

ListItem.propTypes = {
    list: PropTypes.object.isRequired
}

const pStyle = {
    textAlign: 'center',
    opacity: 1,
}

const listStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    marginLeft: '50%',
    opacity: 0.9
}

export default ListItem