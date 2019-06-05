import React, {Component} from 'react';

export class AddList extends Component {

    state = {
        name:''
    }

    //setting the value whatever we type in, name: e.target.value
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    //prevent from automatically submit and call props method
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addList(this.state.name);
        this.setState({name: ''});
    }

    render(){
        return (

            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text" name="name" style= {{ flex: '10', padding: '5px' }}
                       placeholder="Add new list..." value={ this.state.name} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{ flex: '1' }}/>

            </form>
        )
    }
}

export default AddList