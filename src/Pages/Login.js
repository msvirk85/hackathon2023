import React from "react";
import FormView from "../Components/FormView/FormView";

function Login() {
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
                            error: emailError,
                        },
                        {
                            key: "password",
                            type: "password",
                            name: "password",
                            placeholder: "Enter your password",
                            handler: (e) => setPassword(e.target.value),
                            error: passwordError,
                        },
                    ],
                }}
                handlers={{
                    formHandler: handleLogin,
                    checkHandler: (e) => setRememberMe(true)
                }}
            />
        </div>
    );
}

export default Login;
