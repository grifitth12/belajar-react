    import {useForm} from 'react-hook-form';
    import {z} from 'zod';
    import {zodResolver} from '@hookform/resolvers/zod';
    import { useState } from 'react';
    // type RegisterFromSchema = {
    //     password: string;
    //     username: string;
    // }
    const registerFormSchema = z.object({
        username: z.string().min(3, {message: "minimal 3 karakter cuy"}).max(10, {message: "Kelebihan kocak karakternya cuy"}),
        password: z.string().min(8, {message: "minimal 8 karakter cuy"}),
        repeatPassword: z.string(),
        age: z.coerce.number().min(10),
        dob: z.coerce.date().min(new Date()).optional(),
    })
    .superRefine((arg, ctx) => {
        if (arg.password !== arg.repeatPassword) {
            ctx.addIssue({
                code: "custom",
                path: ["repeatPassword"],
                message: "password tidak sama",
            })
        }
    });

    type RegisterFormSchema = z.infer<typeof registerFormSchema>;

    const RHFPage = () => {
        const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
    resolver: zodResolver(registerFormSchema),
    });

        const handleRegisterUser = (values : RegisterFormSchema) => {
            alert("Form submitted");
            console.log(values);
        }
        return(
            <div>
                <h1>Reach Hook Form</h1>

                <form onSubmit={form.handleSubmit(handleRegisterUser)} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                <label>Username : 
                <input type="text" {...form.register("username")} />
                </label>

                <span style={{
                    color: 'red'
                }}>{form.formState.errors.username?.message}</span>

                <label>Password:
                    <input type={showPassword ? "text" : "password"} {...form.register("password")} />
                </label>
                <span style={{
                    color: 'red'
                }}>{form.formState.errors.password?.message}</span>

                <label>Repeat Password:
                    <input type={showPassword ? "text" : "password"} {...form.register("repeatPassword")} />
                </label>
                <span style={{
                    color: 'red'
                }}>{form.formState.errors.repeatPassword?.message}</span>

                <label>
                    <input type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} />
                    Show password
                </label>

                <label>Age : 
                <input type="number" {...form.register("age")} />
                </label>

                <span style={{
                    color: 'red'
                }}>{form.formState.errors.age?.message}</span>

                <label>Date of birth : 
                <input type="date" {...form.register("dob")} />
                </label>

                <span style={{
                    color: 'red'
                }}>{form.formState.errors.dob?.message}</span>

                <button type="submit" style={{
                    width: "fit-content"
                }}>Register User</button>
                </form>
            
            </div>
        )
    }
    export default RHFPage;