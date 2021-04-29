import React, { Component } from 'react';
import Headers from "./Headers"
import Todo from "./Todo"
import AddTodos from "./AddTodos"
import UserList from './UserList'
import ShowList from './UserListShow'
import PostList from './PostList'
import ShowListPost from './PostListShow'
import './App.css'
import axios from 'axios';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';

class App extends Component {
    state = {
      todos: [],
      
    };
  
  
    componentDidMount() {
      
      axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({ todos: res.data }));
    }
  
    //Toggle Complete
    markComplete = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
    };
  
    //Delete Todo
    delTodo = id => {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
    };
  
    //Add Todo
    addTodo = title => {
      axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed: false
        })
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    };
    render() {
        return (
          <BrowserRouter>
          <Switch>
            <div className='App'>
              <div className='container'>
                <Headers />
                   <Route exact={true} path='/' render={props => (
                      <React.Fragment>
                        <AddTodos addTodo={this.addTodo}/>
                        <Todo
                          todos={this.state.todos}
                          markComplete={this.markComplete}
                          delTodo={this.delTodo} />
                          </React.Fragment> 

                          )}
                  /> 

                  <Route path='/Users' component={UserList} exact={true}/>
                    <Route path='/users/:userId' component={ShowList}/>
                    <Route path='/postlist' component={PostList} exact={true}/>
                    <Route path='/posts/:userId' component={ShowListPost}/>
              
              </div>
            </div>
            </Switch>
          </BrowserRouter>
        );
      }
    }
    
    export default App;
    


