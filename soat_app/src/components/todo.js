import React, { Component } from 'react';
import {ListGroup,ListGroupItem,Container,Row,Col,Button,Input}from 'reactstrap';

class Todo extends Component {
    constructor(){
        super();
        this.state={
todos:[
{text:'Bugun yaxshi dars qilishim kerak '},
{text:'Soat 12gacha dars qilishim kerak'},
{text:'Soat 12da Jumaga borishim kerak '},
{text:'Soat 3da ingliz tili darsiga borishim kerak'}

]

        }
    }
    Ad=()=>{
let inp=document.querySelector('#texte').value,
obj={text:inp},
arr=[];
this.state.todos.map((todo)=>{

    arr.push(todo);
})

arr.push(obj);
this.setState({

    todos:arr
});
document.querySelector('#texte').value=''
    }
    Del=(id)=>{
let delay=[];
this.state.todos.map((todo,index)=>{
index !== id ? delay.push(todo) : delay.push();

});
this.setState({
todos:delay

})

    }
    render() {
        return (
            <>
            <Container>
                <Row>
                    <Row>
                        <Col md={{size:8,offset:2}}>
<div className='di'>
<Input type='text' placeholder='To do something' id='texte' className='p-3 w-75' />
<Button className='btn btn-info w-25' onClick={()=>this.Ad()}><i className='fa fa-plus'></i></Button>
</div>

                        </Col>
                    </Row>
                    <Col md={{size:8,offset:2}}>
                    <ListGroup>
                  {
this.state.todos.map((todo,index)=>{

return(

    <ListGroupItem className='list'><span>{todo.text}</span> <Button onClick={()=>this.Del(index)}><i className='fa fa-trash'></i></Button></ListGroupItem>

)
})

                  }
                    </ListGroup>  
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default Todo;