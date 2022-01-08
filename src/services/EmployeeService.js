import axios from 'axios';

const EMPLOYEE_API_GET_EMPLOYEES = "http://localhost:8080/api/v1/employees";
const EMPLOYEE_API_CREATE_EMPLOYE = "http://localhost:8080/api/v1/createEmployee";

class EmployeeService {

    //Axios GET method
    getEmployees(){
        //Receives a URL
        return axios.get(EMPLOYEE_API_GET_EMPLOYEES);
    }
    //Axios POST method
    createEmployee(employee){
        //Receives a URL and an JSON object
        return axios.post(EMPLOYEE_API_CREATE_EMPLOYE, employee);
    }
}

export default new EmployeeService();