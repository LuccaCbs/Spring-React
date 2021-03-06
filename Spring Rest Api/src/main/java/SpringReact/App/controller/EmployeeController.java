package SpringReact.App.controller;

import SpringReact.App.model.Employee;
import SpringReact.App.repository.EmployeeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    
    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //create employee rest api
    @PostMapping("/createEmployee")
    public Employee createEmployee (@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
    
    
}
