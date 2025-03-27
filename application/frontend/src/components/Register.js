import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'
class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mob: '',
            password: '',
            Email: ''
        };
        this.changename = this.changename.bind(this);
        this.changeemail = this.changeemail.bind(this);
        this.changemob = this.changemob.bind(this);
        this.changepassword = this.changepassword.bind(this);
        this.changeSubmit = this.changeSubmit.bind(this);
    }
    changename(event) {

        this.setState({
            name: event.target.value
        });
    }
    changemob(event) {
        this.setState({
            mob: event.target.value
        });
    }
    changeemail(event) {
        this.setState({
            Email: event.target.value
        });
    }

    changepassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    changeSubmit(event) {
        console.log(event)
        axios.post('http://localhost:5000/register',
            {
                mob: this.state.mob,
                name: this.state.name,
                Email: this.state.Email,
                password: this.state.password
            })
            .then((res) => {
                console.log(res);
                alert("You have successfully registered " + this.state.name)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div style={{ margin: '130px' }}>
                <div style={{ width: '55%', margin: 'auto' }}>
                    <br />
                    <h2 align='center'>
                        Hey Foodie, Register Here
                    </h2>
                    <br />
                    <form onSubmit={this.changeSubmit}>
                        <div className='form-group row'>
                            <label for="name" className="col-sm-2 col-form-label">Username </label>
                            <div className='col-sm-9'>
                                <input type="text" className="form-control" id="name" placeholder="Enter Username" value={this.state.name} onChange={this.changename} required />
                            </div>

                        </div>
                        <br />
                        <div className='form-group row'>
                            <label for="Email" className="col-sm-2 col-form-label">Email</label>
                            <div className='col-sm-9'>
                                <input type="text" className="form-control" id="Email" placeholder="Enter  Your Email " value={this.state.Email} onChange={this.changeemail} required />
                            </div>
                        </div>
                        <br />
                        <div className='form-group row'>
                            <label for="Mobile" className="col-sm-2 col-form-label">Mobile </label>
                            <div className='col-sm-9'>
                                <input type="text" className="form-control" id="Moblie" placeholder="Enter Mobile Name" value={this.state.mob} onChange={this.changemob} required />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row">
                            <label for="password" className="col-sm-2 col-form-label">Password  </label>
                            <div className='col-sm-9'>
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.changepassword} required />
                            </div>
                        </div>
                        <br />
                        <center>
                            <button type="submit" className="btn btn-primary btn-xs" >Register</button>
                        </center>
                    </form>
                    <div>
                        Existing  User <Link to='/Login'> Login </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(Register);