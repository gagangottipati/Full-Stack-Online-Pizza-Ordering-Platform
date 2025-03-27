import React from 'react'
import IngredientsLogo from '../images/IngredientsLogo.jpg'
import ChefLogo from '../images/ChefLogo.jpg'
import TimeLogo from '../images/TimeLogo.jpg'
import react from 'react'
import axios from 'axios';

export default class Cart extends react.Component {
    constructor(props)
    {
        super();
    }
    render(){
        let btn;
        if(localStorage.getItem("loggedIn") === "1")
        {
            btn = <button style={{ float: 'right' }} type="button" class="btn btn-outline-primary" data-toggle="tooltip" data-placement="bottom" title="Shopping Cart" onClick={() => {axios.get("http://localhost:5000/logout")
            .then((res) => {
                this.props.history.push("/Homes")
            }).catch((err) => {
                console.log(err)
            })
            localStorage.clear() }} >
            Logout
        </button>
        }
        else{
            btn =   <button style={{ float: 'right' }} type="button" class="btn btn-outline-primary" data-toggle="tooltip" data-placement="bottom" title="Shopping Cart" onClick={() => { this.props.history.push("./Login")}} >
            Login
        </button>
        }
    return (
        <div>
            <br/>
            
            {btn}
            <br />
            <h1 style={{ textAlign: 'center' }}> Our Story</h1> <br />
            <div class='Home'>
                <p > We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up
                    with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria’s vouchers. Their enthusiastic response proved
                    that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever! <br /><br />
                    Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan
                    Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
                    <br /><br />
                    We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
                    excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh
                    Pan Pizza is the Tastiest Pan Pizza. Ever!<br /><br></br>
                </p>
                <div class='container'>
                    <div class="image">
                        <img src={IngredientsLogo} width='400' height='200' />
                    </div>
                    <div class='content'>
                        <br />
                        <h2>Ingredients</h2>
                        <p>
                            We're ruthless about goodness. We have no qualms about tearing up a day-old
                            lettuce leat (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop.
                            Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto. It
                            makes the kitchen a better place.
                            <br />
                        </p>
                    </div>
                </div>
                <div class='container'>

                    <div class='content'>
                        <br />
                        <h2>Our Chefs</h2>
                        <p>
                            They make sauces sing and salads dance. They create magic with skill,
                            knowledge, passion, and stirring spoons (among other things). They
                            make goodness so good, it doesn't know what to do with itself. We do
                            though. We send it to you
                            <br />
                        </p>
                    </div>
                    <div class="image">
                        <img src={ChefLogo} width='400' height='200' />
                    </div>
                </div>

                <div class='container'>
                    <div class="image">
                        <img src={TimeLogo} width='400' height='200' />
                    </div>
                    <div class='content'>
                        <br />
                        <h2>  45 min Delivery</h2>
                    </div>

                </div>
            </div>
        </div>

    )
}}
