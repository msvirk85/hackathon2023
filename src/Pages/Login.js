import React, { useState } from "react";
import FormView from "../Components/FormView/FormView";

function Login() {

    // STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <FormView
                formHead={"Login"}
                formFoot={{
                    name: "Create new account",
                    link: "/signup",
                }}
                formData={{
                    inputs: [
                        {
                            key: "email",
                            type: "email",
                            name: "email",
                            placeholder: "Enter your email address",
                            handler: (e) => setEmail(e.target.value),
                        },
                        {
                            key: "password",
                            type: "password",
                            name: "password",
                            placeholder: "Enter your password",
                            handler: (e) => setPassword(e.target.value),
  
                        },
                    ],
                }}
            />
        </div>
    );
}

export default Login;
