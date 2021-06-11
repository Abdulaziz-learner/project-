import React,{useState} from 'react';
import {ListGroup,ListGroupItem,Container,Row,Col,Button,Input} from 'reactstrap';

export default function AppTo(){
const todoList=[

    
{text:'Erta turish kerak'},
{text:'Saharlik qilish kerak'},
{text:'Bomdod o\'qish kerak'},
{text:'Dars qilish kerak'}
]
const [todos,setTodos] = useState(todoList)
const Del=(id)=>{
    let delArr =[]
todos.map((todo,index)=>{
index !==id ? delArr.push(todo):console.log();
return true;
})
setTodos(delArr)
}
const AddTo=()=>{
   let a = document.querySelector("#textn").value,
   adaT=[]
    todos.map((todo)=>{

        adaT.push(todo)
        return true
    })
adaT.push({text:a});
setTodos(adaT);
}
return(
<>
<Container>
    <Row>
        <Col md={{size:8,offset:2}}>
            <span ><div className='di'>
                
            <Input type='text' placeholder='Todo something' id='textn' className='w-75' />
            <Button  className='w-25' onClick={()=>AddTo()}><i className='fa fa-plus'>Add</i></Button>
            </div>
            </span>
        </Col>
    </Row>
    <Row>
        
        <Col md={{size:8,offset:2}}>
<ListGroup>
{

todos.map((todo,index)=>{
return(

<ListGroupItem key={{index}}>

<span className='d-flex justify-content-between'>{todo.text} <span><Button onClick={()=>AddTo(index)} className='btn btn-info'><i className='fa fa-plus'></i></Button><Button onClick={()=>Del(index)} className='btn btn-danger'><i className='fa fa-backspace'></i></Button></span></span>
</ListGroupItem>

)

})

}

</ListGroup>

        </Col>
    </Row>
</Container>


</>


)



}