import {useState} from 'react';


const FormPage = () => {
    //! Uncontrolled component/input
    // const inputRef = useRef<HTMLInputElement>(null);
    // const inputEmailRef = useRef<HTMLInputElement>(null);

    //? Controlled component/input
    const [fullNameInput, setFullNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [usernameErrorMessage, setUsenameErrorMessege] = useState("");
    const [passwordErrorMessege, setPasswordErrorMessege] = useState("");

    const handleSubmit = () => {
        // const fullNameFormValue = inputRef.current?.value;
        // const emailFormValue = inputEmailRef.current?.value;
        // alert("Form submitted: " + fullNameFormValue + " " + emailFormValue );
       
        const passwordValidation = passwordInput.length < 8;

        if (passwordValidation) {
            setPasswordErrorMessege("Password must be at least 8 characters");
        }
    };
    return (
        <div>
            <h1>INI FORM PAGE REHAN BERUK</h1>

            <h3>Fullname : {fullNameInput}</h3>
            <h3>Password : {passwordInput}</h3>

            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                gap: "4px",
            }}> 
                <label htmlFor="full-name">Username</label>
                <input onChange={(e) =>{
                    setFullNameInput(e.target.value)
                     const fullNameValidation = e.target.value.length < 3;
                     if (fullNameValidation) {
                        setUsenameErrorMessege("Username must be at least 3 characters");
                    } else{
                        setUsenameErrorMessege("")
                    }
                    }}id="full-name" type="text" value={fullNameInput} />

                <span style={{ color: "red"}}>{usernameErrorMessage}</span>
                

                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPasswordInput(e.target.value)} id="email" type="password" value={passwordInput} />

                <span style={{ color: "red"}}>{passwordErrorMessege}</span>

                <button onClick={handleSubmit}>Submit njing</button>
            </div>
        </div>
    )
}

export default FormPage;