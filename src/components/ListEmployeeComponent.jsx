import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //Sets an array as state to fill it with DB data
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        //When the component is mount calls the "EmployeeService" method
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    //Method to handle the "onClick" event
    addEmployee() {
        //Render to "/add-employee"
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'> Employees List</h2>
                <button className='btn btn-primary' onClick = {this.addEmployee}>Add Employee</button>
                
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee E-Mail</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Fills the table body with the Employees data in each row */}
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName}</td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.email}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;