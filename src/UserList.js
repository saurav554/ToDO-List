import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'


class UserList extends Component
{
    constructor()
    {
        super()
        this.state={
            users:[]
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data
            console.log('userData', response)
            this.setState({users})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
        return(
        <div>
            <h2>Listing Users - {this.state.users.length}</h2>
            <ul>
                {
                    this.state.users.map((ele,i)=>{
                    return (<li key={i}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>)
                    })
                }
            </ul>
        </div>
        )
    }
}

export default UserList