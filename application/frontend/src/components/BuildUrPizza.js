import React from 'react';
import axios from 'axios';
import Cart from './Cart';

class BuildUrPizza extends React.Component {
    constructor(){
        super()
        this.state={
            ingredients:[],
            total:0,
            checkingredients:[],
            i:[]
        }
        
    }
    changeCheckingredients(ingredients){
        this.setState({
            checkingredients:ingredients
        })
    }
    changeTotal(price){
        this.setState({
            total:price
        })
    }
    onHandle=(pos)=>{
        var obj={Name:this.state.ingredients[pos].tname,Price:this.state.ingredients[pos].price,Quantity:1,Image:this.state.ingredients[pos].Image}
        const updated = this.state.checkingredients.map((item, index) =>
        index === pos ? !item : item
      );
  
      this.changeCheckingredients(updated);
  
      const totalPrice = updated.reduce(
        (sum, currentState, index) => {
          if (currentState === true) {
            return sum + this.state.ingredients[index].price;
          }
          return sum;
        },
        0
      );
  
      this.changeTotal(totalPrice);
      axios.post("http://localhost:5000/build",obj).then((res)=>{
                console.log(res)              
    }).catch((err)=>{console.log(err)})
    }
    componentDidMount(){
        axios.get('http://localhost:5000/getingredients')
            .then((res)=>{
                this.setState({
                    ingredients:res.data
                    }) 
                
                var temp = []
                for(let i =0;i< this.state.ingredients.length;i++){
                    temp.push(false)  
                }
                this.setState({
                    checkingredients:temp
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    render() {
        
        var op= this.state.ingredients.map((d, index)=>{
            return (
                <tr>
                    <td><img src={d.Image} style={{height:'30px', width:'30px'}}/></td>
                    <td >{d.tname}&nbsp; &nbsp;${d.price}.00</td>
                    <td><input type='checkbox' checked={this.state.checkingredients[index]} onChange={()=>{this.onHandle(index)}}/>&nbsp;Add</td>
                </tr>
                )})
        return (     
            <div style={{ margin: '100px', textAlign:"center",border: '1px solid yellow' }}>
                <br />
                <p >Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below</p>
                <div className='row' style={{ margin: '100px' }} >
                    <table class="table table-bordered" style={{marginleft: '200px', Width:'50px',marginright: '200px' }}>
                        <tbody>
                            
                            {op}
                
                            </tbody>                        
                    </table>
                    <h6 style={{textAlign:'left'}}>Total Cart: {this.state.total}</h6>
                    <div >
                        <br/>
                        <button type="button" class="btn btn-warning" onClick={()=>{
                                        this.props.history.push("/Cart")
                        }}>Build Ur pizza</button>
                    </div> &nbsp;
                
                </div>
                <div style={{display:'none'}}>
                <Cart total={this.state.total}/>
                </div>
                
            </div >
           
            
    );
    
    }
}
export default BuildUrPizza;
