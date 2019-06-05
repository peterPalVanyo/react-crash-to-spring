import React, {Component} from 'react';

export class AddList extends Component {

    state = {
        groupId:''
    }

    //setting the value whatever we type in, title: e.target.value
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    //prevent from automatically submit and call props method
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addList(this.state.groupId);
        this.setState({groupId: ''});
    }

    render(){
        return (

            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="groupId" style= {{ flex: '10', padding: '5px' }}
                       placeholder="Add new list..." value={ this.state.groupId} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{ flex: '1' }}/>

            </form>
        )
    }
}

export default AddList