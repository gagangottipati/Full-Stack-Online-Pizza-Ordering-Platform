import react from 'react'
import axios from 'axios';
export default class OrderPizza extends react.Component {
    constructor(props) {
        super(props);

        this.state = {
            pizz: [],

        };
        axios.get("http://127.0.0.1:5000/getmenu")
            .then((responce) => {
                this.setState({
                    pizz: responce.data
                });

            })
            .catch((err) => {
                console.log(err)
            });
            
    }
    

    render() {
        return (
            
            <div>
                <div className='row' style={{ margin: '30px', border: '1px solid yellow' }} >
                    {
                        this.state.pizz.map(pizza => {
                            return <div className="col-md-5" style={{ marginLeft: '70px', marginTop: '30px', border: '1px solid orange' }}>

                                <div class='container' style={{ alignItems: 'center', textAlign: "left" }}>
                                    <div class='content'>
                                        <h6> {pizza.name}</h6>
                                        <div style={{ height: "15px", width: "15px", backgroundColor: (pizza.Type === "veg") ? "green" : "red" }}></div>
                                        <h6>${pizza.price}</h6>
                                    </div>

                                    <div className="details" >
                                        <p>{pizza.Description}</p>
                                        <p><b>Ingredients:</b> {pizza.Ingredients}</p>
                                        <p><b>toppings: </b>{pizza.Topping}</p>
                                    </div>

                                    <div class="order-image">
                                        <img src={pizza.Image} className="img-fliud" alt='pizzeria_image' style={{ height: "150px", width: '150px' }}></img>
                                        < div class="d-grid gap-2 d-md-flex ml-auto" style={{ margin: "10px" }}>
                                            <button type="button" class="btn btn-warning " onClick={() => {
                                                axios.post("http://localhost:5000/addtocart", { ...pizza, 'Quantity': 1 })
                                                    .then((response) => {
                                                    })
                                                    .catch((err) => {
                                                        console.log(err)
                                                    });
                                            }} >Add to cart </button>

                                        </div> &nbsp;
                                    </div>
                                </div>.
                            </div>
                        })
                    }
                </div>
               
            </div >
        )
    }
}
