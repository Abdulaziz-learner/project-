import React ,{Component} from 'react';
   
    class Soat extends Component {
       constructor(props){
           super(props);
          this.state={
              count:0
          } 
       }
        Oshirish =()=>{
            this.setState({
                count:this.state.count +1
            })
        }
        Kamaytirish=()=>{
            this.setState({
                count:this.state.count-1
            })
        }
        render(){
            return(
                <>
    
              <div className='text-center'>
                  
              {this.state.count > 0 ?
                             <button className='a' onClick={()=>this.Kamaytirish()}  >-</button>
                             :
                             <button className='b'>-</button>}
                             <span>{this.state.count}</span>
                 <button className='b' onClick={()=>this.Oshirish()}>+</button>
                                  
                       
              </div>
                </>
            )
        }
    }
    export default Soat;

