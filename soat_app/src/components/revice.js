import React,{Component} from 'react';
import {Container,Row,Col,Table, Button} from 'reactstrap';

export default class Revice extends Component{
constructor(){
    super();
    this.state={
users:[

    {name:'ABDULAZIZ',age:27,location:'ANDIJAN',isMen:true},
    {name:'MUHAMMADFOTIH',age:37,location:'GULISTAN',isMen:true},
    {name:'ABU BAKR SIDDIQ',age:57,location:'FARGONA',isMen:true},
    {name:'NAIMA ABDULRASHID QIZI',age:13,location:'NAVOIY',isMen:false},
    {name:'SAAD IBN ABUVAQQOS',age:25,location:'TASHKENT',isMen:true},
    {name:'ALISHER',age:21,location:'BUKHARA',isMen:true},
    {name:'ISLOMBEK',age:25,location:'OSH',isMen:true},
    {name:'MALOHAT',age:49,location:'MOSCOW',isMen:false},
    {name:'RO\'ZIXON',age:28,location:'LONDON',isMen:false},
],
usersAbs:[]

   }
    
}
componentDidMount(){
    this.setState({
        usersAbs:this.state.users
    })
}

Men=()=>{
    let erkak=[];
    this.state.users.map((user)=>{
    user.isMen === true ? erkak.push(user): console.log();
    return true
    
    });
    
    this.setState({
        users:erkak
    })
    
    }
Show=()=>{
let arr=[];
this.state.users.map((user)=>{
user.name.length <10 ? arr.push(user):
console.log();
return true;


})
this.setState({
    users:arr
})


}
Ajrat=()=>{
let arrSon=[];
this.state.users.map((user)=>{
    user.age < 30? arrSon.push(user):console.log();
    return true 
})
this.setState({
    users:arrSon
})

}

Qaytar=()=>{
this.setState({
    users:this.state.usersAbs
})
}

render(){
    return(
        <>
<Container className='py-2'>
 <Row className='py-2'>
   
     <Button className='btn btn-danger py-2' onClick={()=>this.Men()}>ERKAKLAR</Button>
    <Button className='btn btn-dark py-2' onClick={()=>this.Ajrat()}> 30DAN KICHIGINI AJRAT </Button>
        <Button  className='btn btn-success py-2' onClick={()=>this.Show()}>ISMI 10TA HARFDAN KICHIGINI SORT QIL</Button>
       <Button className='btn btn-info py-2' onClick={()=>this.Qaytar()}>QAYTAR</Button>
        <Col md={{size:8,offset:2}}>

            <Table  className='table-dark fs-40px py-3 text-white'>
<thead>
<tr>
    <th>Number</th>
<th>Name</th>
<th>Age</th>
<th>Location</th>
</tr>

</thead>
<tbody>
{this.state.users.map((user,index)=>{
    if(user.isMen===false){
        return(
            <tr>
            <td className='bg-danger' key={index}>{index+1}</td>
            <td className='bg-danger' key={index}>
            {user.name}
                
            </td>
            <td className='bg-danger' key={index}>
                {user.age}
            </td>
            <td className='bg-danger' key={index}>{user.location}</td>
            <td className='bg-danger' key={index}>{user.isMen}</td>
            
            </tr>
            
            
            )
    } else {

        return(
            <tr>
            <td className='bg-success' key={index}>{index+1}</td>
            <td className='bg-success' key={index}>
            {user.name}
                
            </td>
            <td className='bg-success' key={index}>
                {user.age}
            </td>
            <td className='bg-success' key={index}>{user.location}</td>
            <td className='bg-success' key={index}>{user.isMen}</td>
            
            </tr>
             
        )
    }


    })}

</tbody>


            </Table>

        </Col>
    </Row>
</Container>

        </>
    )
}

}