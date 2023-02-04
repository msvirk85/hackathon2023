import React from "react";
import { Link } from "react-router-dom";

function FormView({ formHead, formFoot, formData, handlers }) {
    return (
        <div>
            <div>
                <h2>{formHead}</h2>

                <form onSubmit={handlers.formHandler}>
                    {formData.inputs.map((input) => (
                        <div key={input.key}>
                            <input
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                onChange={input.handler}
                            />
                            {input.error && (
                                <p>{input.error}</p>
                            )}
                        </div>
                    ))}
                    <div>
                        <input type="submit" value={formHead} />
                    </div>
                    {formHead === "Login" && (
                        <div>
                            <Link to={"/forgotpassword"} target="_blank">
                                Forgotten password?
                            </Link>
                            <input type="checkbox" name="rememberMe" onChange={handlers.checkHandler}/>
                        </div>
                    )}
                    <div>
                        <Link to={formFoot.link}>
                            {formFoot.name}
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormView;