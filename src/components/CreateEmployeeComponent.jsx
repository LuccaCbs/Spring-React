import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            //Creates the same params that the "Employee" entity has
            firstName: '',
            lastName:'',
            email:''
        }

        //Calls the methods that will change the state of each param and bind them to the class ones
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);

        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    

    saveEmployee = (e) => {
        //Prevents the form of being send from the HTML
        e.preventDefault();
        
        //Creates an employee JSON object
        let employee = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email: this.state.email
        }
        
        //Calls to the "EmployeeService" method and stablish what to do when gets a response(needs a try catch)
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees')
        })
    }

    //Cancel the form and redirects to the "/employees" render
    cancel(){
        this.props.history.push('/employees');
    }

    //Methods to handle the "onChange" events in the form
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className='text-center'>Add Employee</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder='First Name' name="firstName" className='form-control'
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name' name="lastName" className='form-control'
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>Email Address:</label>
                                        <input placeholder='Email' name="email" className='form-control'
                                        value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <br />
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;