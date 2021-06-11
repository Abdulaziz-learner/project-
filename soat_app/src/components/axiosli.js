import React ,{useState,useEffect} from 'react';
import http from './serves/axs';

function Sapp(){
const [todos,setTodos] =useState([]);
useEffect(()=>{
 http.get('/todos')
 .then(res=>setTodos(res.data));  
})
return(
   <div className='container'>
       <div className='row'>
           {todos.map((todo,index)=>{
               return(
               <div key={index} className='col-3 p-2'>
                   <div className='card'>
                       <div className='card-title'>{todo.completed}</div>
                        <div className='card-body'>{todo.title}</div></div></div>)
           })
           }
         
       </div>
   </div>

)
}
export default Sapp;
