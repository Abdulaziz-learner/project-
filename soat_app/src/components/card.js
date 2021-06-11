import React, { Component } from 'react';
import {Container,Row,Col,Card,CardBody,Button,CardText, Alert} from 'reactstrap';
class Vard extends Component {
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
    Show=(id)=>{
    //   this.state.users.map((user,index)=>{
    //     index === id ? console.log(user): console.log();;
    //     return true;
       
    //   })
      this.state.users.map((user,index)=>{

        index == id ? alert(user.name) :  alert();
        return true
      })


    }
    render() {
        return (
            <>
                    <Container>
                        <Row>
                              {this.state.users.map((user,index)=>{
                                      return(<Col md='3'>
                                      <Card onClick={()=>this.Show(index)} className='bg-dark'>
                                          <CardBody className='bg-success text-light text-center'>

                                              <CardText >
                                                 <h1 key={user}> {user.name}</h1>
                                              </CardText>
                                              <CardText>
                                             <h1 key={user}> {user.id}</h1>
                                              </CardText>
                                          </CardBody>
                                      </Card>

              </Col>)  

                              })}
                                        
                        </Row>
                    </Container>  
            </>
        );
    }
}

export default Vard;