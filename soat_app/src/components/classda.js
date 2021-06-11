import React, { Component, useEffect } from 'react';
import http from './serves/axs';
class Classda extends Component {
    constructor(){
        super();
        this.state={
todos:[]
        }
      todoUse=useEffect(); 
    }
    todoUse =()=>{
        http.get('/todos')
         .then(res=>this.setState(res.data));
    }
    render() {
        return (
            <div className='container' >
                <div className='row'>
                        {this.state.todos.map((todo,index)=>{
                            return (
                                <div key={index} className='col-3 p-2'>
                                <div className='card'>
                                <div className='card-body'>{todo.completed}</div>
                                <div className='card-title'>{todo.title}</div>
                                </div>
                                </div>

                            )
                        })}
                </div>

            </div>
        );
    }
}

export default Classda;