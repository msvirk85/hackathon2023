import React from "react";
import { Link } from "react-router-dom";

function FormView({formHead, formFoot, formData}) {
    return (
        <div>
            <div>
                <h2>{formHead}</h2>

                <form>
                    {formData.inputs.map((input) => (
                        <div key={input.key}>
                            <input
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                onChange={input.handler}
                            />
                        </div>
                    ))}
                    <div>
                        <input type="submit" value={formHead} />
                    </div>
                    {formHead === "Login" && (
                        <div>
                            <div>
                                <input type="checkbox" name="rememberMe"/>
                                Remember Me
                            </div>
                            <Link to={"/forgotpassword"} target="_blank">
                                Forgot password?
                            </Link>
                        </div>
                    )}
                    <div>
                        <Link to={formFoot.link}>{formFoot.name}</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormView;
