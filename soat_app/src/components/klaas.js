// import axios from 'axios';28
import React, { Component } from 'react';
import http from './serves/axs';
class Klaas extends Component {
    constructor(){
        super();
        this.state={
todos:[]       }

 }
 componentDidMount() {
  http.get(`/photos`)
    .then(res => {
      const todos = res.data;
      this.setState({ todos });
    })
}
 

    render() {
        return (
            <div>
                <div className='container' >
                <div className='row'>
                        {this.state.todos.map((todo,index)=>{
                            return (
                                <div key={index} className='col-3 p-2'>
                                <div className='card a bg-secondary text-light bordered shadow'>
                                <div className='card-body'><h3>{todo.completed}</h3></div>
                                <div className='card-title'><h3>{todo.title}</h3></div>
                                </div>
                                </div>

                            )
                        })}
                </div>

            </div>
            </div>
        );
    }
}

export default Klaas;