import { useState } from "react";

type Employee = {
    id:number;
    name:string;
};

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    const fetchEmployees = async () => {
        const request = await fetch("http://localhost:2000/employees", {
            method: "GET"
        });

        const responseJson = (await request.json()) as Employee[];//! array of object

        setEmployees(responseJson);
    }
    return (
        <div>
            <h1>Employees pages</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    employees.map(employee =>{
                        return (
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                            </tr>
                            
                        )
                    })
                   }
                </tbody>
            </table>
            
            <button onClick={fetchEmployees}>
                Fetch Employees
            </button>

        </div>
    )
};

export default EmployeesPage;