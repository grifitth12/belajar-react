import { useState } from "react";

type EmployeeResponse = {
    id:number;
    name:string;
};

export const useFetchEmployees = () => {
        const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
        const [employeeIsLoading, setEmployeeIsLoading] = useState(false);
        const [employeesError, setEmployeesError] = useState("");
    
        const fetchEmployees = async () => {
            try {
                setEmployeeIsLoading(true) //? toogle mode loading on
                const response = await fetch("http://localhost:2000/employees", {
                method: "GET"
            });
    
            const responseJson = (await response.json()) as EmployeeResponse[];//! array of object
            setEmployees(responseJson);
            } catch (error) {
                setEmployeesError((error as TypeError).message)
                // setEmployeesError("Gagal medapatkan data ")
                // alert("gagal kontol")
            } finally{
                 setEmployeeIsLoading(false) //? toggle mode loading off
            }
            
        };
        return {
            fetchEmployees,
            isLoading: employeeIsLoading,
            errorMessege: employeesError,
            data: employees
        }
}