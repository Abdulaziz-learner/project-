import React,{useState,useEffect} from 'react';

import http from './serves/axs';
 function Apps (){
const [todos,setTodos]=useState([]);


useEffect(()=>{
http.get('/todos')
.then(res=>setTodos(res.data))
})
return(
<div className='container'>
    <div className='row'>
{todos.map((todo,index)=>{
return(
<div key={index} className='col-4 p-2'>
<div className='card p-2'>

<div className='card-body p-2'>{todo.title}</div>
<div className='card-title p-2'>{todo.completed}</div>
</div>


</div>

)

})}
        
    </div>
</div>

)
}
export default Apps;