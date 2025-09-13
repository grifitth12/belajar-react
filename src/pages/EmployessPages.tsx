import { useState } from "react";
import { useFetchEmployees } from "../services/useFetchEmployees";
import { useCreateEmployee } from "../services/useCreateEmployee";
import { useDeleteEmployee } from "../services/useDeleteEmployee";

const EmployeesPage = () => {
    const [inputText, setInputText] = useState("")
    const{fetchEmployees, isLoading, data, errorMessege} = useFetchEmployees();

    const{ createdEmployeeError, createdEmployeeIsLoading, createEmployee } = useCreateEmployee();
    const{ deleteEmployee, deleteEmployeeError, deleteEmployeeIsloading } = useDeleteEmployee();

    const handleCreteEmployee = async () => {
        await createEmployee(inputText)
        await fetchEmployees()
        setInputText("")
    };

    const handeDeleteEmployee = async (employeeId: string) => {
        await deleteEmployee(employeeId)
        await fetchEmployees()
    }
    return (
        <div>
            <h1>Employees pages</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    data.map((employee) =>{
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td><button onClick={() => handeDeleteEmployee(employee.id)}>Delete</button></td>
                            </tr>
                            
                        )
                    })
                   }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            <input onChange={e => setInputText(e.target.value)} type="text" value={inputText} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button disabled={createdEmployeeIsLoading} onClick={handleCreteEmployee}>Created Employee</button>
                        </td>
                    </tr>
                    {
                        createdEmployeeError && <tr>
                            <td colSpan={2}>{createdEmployeeError}</td>
                        </tr>
                    }
                </tfoot>
            </table>
            
            <button disabled={isLoading} onClick={fetchEmployees}>
                Fetch Employees
            </button>

            {
                isLoading && <p>Loading ...</p>
            }

            {
                errorMessege && <p style={{color: "red"}}>{errorMessege}</p>
            }

        </div>
    )
};

export default EmployeesPage;