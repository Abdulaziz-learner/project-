import React, { Component } from 'react';
import {Container,Row,Col,Button,Input} from 'reactstrap'
class Ref extends Component {
    constructor(){
        super();
        this.state={
            name:'n'
        }
        this.ism=React.createRef();
    }
    GetName(){
this.setState({
    name:this.ism.current.value
})
    }
    render() {
        return (
            <>
 

<Container>
    <Row >
        <Col md='4' className='text-dark'>
<label htmlFor='name' id='label'>{this.state.name}</label><br/>
<input onInput={()=>this.GetName()} type='text' ref={this.ism} id='name' placeholder='name'></input>
<Button  color='dark'>Add </Button>

        </Col>
    </Row>
</Container>

            </>
        );
    }
}

export default Ref;