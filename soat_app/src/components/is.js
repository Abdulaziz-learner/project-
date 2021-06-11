import React, { Component } from 'react';
import {ListGroup,ListGroupItem,Container,Row,Col,Button,Input} from 'reactstrap';

class Is extends Component {
  constructor(){
super();
this.state={
todos:[
{text:'Bugun erta turishim kerak'},
{text:'Bugun erta turishim kerak'},
{text:'Bugun erta turishim kerak'},
{text:'Bugun erta turishim kerak'},


]


}

  }
  Add=()=>{
let inp =document.querySelector('#text').value,
obj={text:inp},
arr=[];
this.state.todos.map((todo)=>{
arr.push(todo);

})
arr.push(obj)

this.setState({
todos:arr

})
document.querySelector('#text').value="";
  }
  Del=(id)=>{
let del=[];
this.state.todos.map((todo,index)=>
{
 id!== index ? del.push(todo) : del.push();
this.setState({
todos:del

})
})


  }
    render() {
        return (
            <>

            <Container>
                <Row>
                <Col md={{size:8,offset:2}}>
<div className='di'>
<Input type='text' placeholder='todo something' className='p-3 w-75' id='text' />
<Button className='w-25' onClick={()=>this.Add()}><i className='fa fa-plus'></i></Button>
</div>
</Col>

                </Row>
                <Row>
                    <Col md={{size:8,offset:2}}>
                    <ListGroup>

{this.state.todos.map((todo)=>{
return(<ListGroupItem className='list'>
    <span>{todo.text}</span>
    <Button onClick={()=>this.Del(index)}><i className='fa fa-trash'></i></Button>
    </ListGroupItem>
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

export default Is;