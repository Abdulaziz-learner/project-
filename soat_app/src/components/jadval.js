import React, { Component } from 'react';
import {Container,Row,Col,Table,Card,CardBody,CardImg,Input, Button} from 'reactstrap';
import IMG from './media/1.png'
class Jadval extends Component {
    constructor(){
        super();
        this.state={
            users:[
                {name:'Akromjon',id:1},
                {name:'Abdulaziz',id:2},
                {name:'Diyor',id:3},
                {name:'Fazliddin',id:4},
                {name:'Islombek',id:5},
                {name:'Alisher',id:7},
                {name:'Abdullox',id:8},
                {name:'Ziyoviddin',id:9}
                
                
                ]

        }
    }
    
       


      Obor=(obj,id)=>{
          
        document.querySelector('#text').value=obj.name;

       


          
      }  

Show=(obj,id)=>{
document.querySelector('#number').value=obj.id;

}

    render() {
        return (
            <>
            <Container>
                <Row>
<Col md={{size:8,offset:2}}>
    <span className='spa'><Input type='text' placeholder='informs' className='bg-dark  text-white p-2 py-3' id='text'/></span>
    <Input type='number' placeholder='informs' className='bg-dark text-white p-2 py-3' id='number'/>
</Col>

                    <Col md={{size:8,offset:2}}>
                    <Table bordered className='bg-dark text-light'>
                    <thead>
                    <tr >
                        <th>#</th>
                        <th>Userning idsi:</th>
                        <th>Userning ismi:</th>
                        </tr>
                    </thead>  
                    {this.state.users.map((user,index)=>{

return( <tbody>
    <tr key={index} >
    <td><h3>{index+1}</h3></td>
    <td><h3>{user.id} <Button color='info' onClick={()=>this.Show(user,index)}><i className='fa fa-plus'></i></Button></h3></td>
    <td><h3 className='d-flex justify-content-between'>{user.name}<Button color='info' onClick={()=>this.Obor(user,index)} >Add</Button></h3></td>
    </tr>
</tbody>
  )

                    })}
                 
                  
            </Table> 
                    </Col>
                </Row>
            </Container>
            
            </>
        );
    }
}

export default Jadval;