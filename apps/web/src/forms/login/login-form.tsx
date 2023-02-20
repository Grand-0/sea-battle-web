import React, { useState } from "react";
import { SeaComponentsModule } from "sea-components-module";
import { StatesAuth } from "../../states/auth-state";

type LoginFormProps = {
    setAuthState: (value: StatesAuth) => void;
};

export function LoginForm({ setAuthState }: LoginFormProps) {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorLogin, setErrorLogin] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(false);

    return (
        <>
            <SeaComponentsModule.Input
                title="Login"
                value={login}
                onValueChange={setLogin}
                error={errorLogin}
            />
            <SeaComponentsModule.PasswordField
                title="Password"
                value={password}
                onValueChange={setPassword}
                error={errorPassword}
            />
            <div className="mainContainer_content_loginContainer_rememberContainer">
                <SeaComponentsModule.Checkbox
                    checkboxName={"Remember me"}
                    value={remember}
                    onValueChange={setRemember}
                />
                <a>Forgot password?</a>
            </div>
            <div className="mainContainer_content_loginContainer_buttonGroup">
                <SeaComponentsModule.Button text="Login" onClick={() => {}} />
                <SeaComponentsModule.Button
                    text="SignUp"
                    onClick={() => {
                        setAuthState(StatesAuth.SignUp);
                    }}
                />
            </div>
            <div className="mainContainer_content_loginContainer_creditals">
                <label>Or, login with:</label>
                <a>Google</a>
                <a>LinkedIn</a>
                <a>Facebook</a>
            </div>
        </>
    );
}
