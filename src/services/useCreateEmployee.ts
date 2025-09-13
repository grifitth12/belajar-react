import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateEmployee = () => {
        const [createdEmployeeIsLoading, setCreatedEmployeeIsLoading] = useState(false);
        const [createdEmployeeError, setCreatedEmployeeError] = useState("");
    
        const createEmployee = async (payload: string) => {
            try {
                setCreatedEmployeeIsLoading(true)
                await axiosInstance.post("/employees", {
                name: payload,
            })
            } catch (error) {
                setCreatedEmployeeError((error as TypeError).message)
            }
            finally{
                setCreatedEmployeeIsLoading(false);
            }
    
        };

        return{
            createdEmployeeIsLoading,
            createdEmployeeError,
            createEmployee,
        }
}