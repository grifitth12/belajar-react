import { useFetchEmployees } from "../services/useFetchEmployees";

const EmployeesPage = () => {
    const{fetchEmployees, isLoading, data, errorMessege} = useFetchEmployees()
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
                    data.map((employee) =>{
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