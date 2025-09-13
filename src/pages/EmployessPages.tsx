import { useState } from "react";
import { useFetchEmployees } from "../services/useFetchEmployees";
import { useCreateEmployee } from "../services/useCreateEmployee";
import { useDeleteEmployee } from "../services/useDeleteEmployee";
import { useEditEmployee } from "../services/useEditEmployee";

const EmployeesPage = () => {
    const [inputText, setInputText] = useState("")
    const [editInputTeks, setEditInputTeks] = useState("")
    const [editJobInputTeks, setEditJobInputTeks] = useState("")
    const [selectedEmployeeId, setSelecetedEmployeeId] = useState("")
    const{fetchEmployees, isLoading, data, errorMessege} = useFetchEmployees();

    const{ createdEmployeeError, createdEmployeeIsLoading, createEmployee } = useCreateEmployee();
    const{ deleteEmployee, deleteEmployeeIsloading } = useDeleteEmployee()
    const{ editEmployee, editEmployeeError, editEmployeeIsLoading } = useEditEmployee()

    const handleCreteEmployee = async () => {
        await createEmployee(inputText)
        await fetchEmployees()
        setInputText("")
    }

    const handeDeleteEmployee = async (employeeId: string) => {
        await deleteEmployee(employeeId);
        await fetchEmployees()
    };

    const handleEditEmployee = async () => {
        if (selectedEmployeeId && (editInputTeks || editJobInputTeks)) {
            await editEmployee(selectedEmployeeId, {
                job: editJobInputTeks,
                name: editInputTeks,
            });
            await fetchEmployees();
            setSelecetedEmployeeId("");
            setEditInputTeks("");
            setEditJobInputTeks("");
        }
    };
    return (
        <div>
            <h1>Employees pages</h1>

            <button disabled={isLoading} onClick={fetchEmployees}>
                Fetch Employees
            </button>

            {
                isLoading && <p>Loading ...</p>
            }

            {
                errorMessege && <p style={{color: "red"}}>{errorMessege}</p>
            }

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Action</th>
                        <th>Edit</th>
                    </tr>        
                </thead>
                <tbody>
                   {
                    data.map((employee) =>{
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.job}</td>
                                <td><button  disabled={deleteEmployeeIsloading}  onClick={() => handeDeleteEmployee(employee.id)}>Delete</button></td>
                                <td><input checked={employee.id === selectedEmployeeId} onChange={() => {
                                    setSelecetedEmployeeId(employee.id);
                                    setEditInputTeks(employee.name);
                                    setEditJobInputTeks(employee.job);
                                }} type="radio" name="employee-edit" /></td>
                            </tr>
                            
                        )
                    })
                   }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>
                            <input onChange={e => setInputText(e.target.value)} type="text" value={inputText} /></td>
                            <td><button disabled={createdEmployeeIsLoading || !setEditInputTeks} onClick={handleCreteEmployee}>Created Employee</button></td>
                    </tr>
                    {
                        createdEmployeeError && <tr>
                            <td colSpan={3}>{createdEmployeeError}</td>
                        </tr>
                    }

                    <tr>
                        <td colSpan={2} ><input value={editInputTeks} onChange={(e) => setEditInputTeks(e.target.value)} type="text"/></td>
                        <td><input value={editJobInputTeks} onChange={(e) => setEditJobInputTeks(e.target.value)} type="text" /></td>
                        <td><button disabled={editEmployeeIsLoading || !selectedEmployeeId} onClick={handleEditEmployee}>Update Employee</button></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
};

export default EmployeesPage;