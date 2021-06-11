import React, { Component } from 'react';
import {Container,Row,Col,Button,Input, Table} from 'reactstrap';
class Nomerlar extends Component {
    constructor(){
        super();
        this.state={
raqamlar:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
,
raqamlarAbs:[]
        }
    }
    componentDidMount(){
        this.setState({
            raqamlarAbs:this.state.raqamlar
        })
    }
Qosh=()=>{
let arr=[],
a = document.querySelector('#num').value,
obj={a};

this.state.raqamlar.map((raqam)=>{
a >= raqam ? arr.push(raqam): console.log();
return true

})

this.setState({
    raqamlar:arr
})
document.querySelector('#num').value='';
}
Return=()=>{
    this.setState({
        raqamlar:this.state.raqamlarAbs
    })
}
    render() {
        return (
            <>
            
        <Container>
            <Row>
                <Col md={{size:8,offset:2}}>
                    <div className='d-flex justify-content-around'>
                    <Input className='bg-secondary text-white w-50' type='number' id='num' placeholder='put something' />
                    <Button className='btn btn-info w-25' onClick={()=>this.Qosh()} >Add to</Button>
                    <Button className='btn btn-danger w-25' onClick={()=>this.Return()}>Return</Button>
                    </div>
                   
                </Col>
            </Row>
        <Row>
            <Col md={{size:8,offset:2}}>
<Table bordereds className='table-dark'>
<thead>
    <tr>
<th>
Rank  
</th>
<th>
    Numbers
</th>
    </tr>
</thead>

<tbody>
    {this.state.raqamlar.map((raqam,index)=>{
        
        
       
return(

<tr>
    <td key={index}>
        {index+1}
    
    </td>
    <td key={index}>
        {raqam}
    </td>
    </tr>
    )

    })}

</tbody>

</Table>


            </Col>
        </Row>
        </Container>    
            </>
        );
    }
}

export default Nomerlar;