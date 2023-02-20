import { SeaComponentsModule } from "sea-components-module";
import React, { useState } from "react";
import { StatesAuth } from "../../states/auth-state";

type SignUpFormProps = {
    setAuthState: (value: StatesAuth) => void;
};

export function SignUpForm({ setAuthState }: SignUpFormProps) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordAgain, setPasswordAgain] = useState<string>("");
    const [errorLogin, setErrorLogin] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const [errorPasswordAgain, setErrorPasswordAgain] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(false);

    return (
        <>
            <SeaComponentsModule.Input
                title="Email"
                value={email}
                onValueChange={setEmail}
                error={errorLogin}
            />
            <SeaComponentsModule.PasswordField
                title="Enter your password"
                value={password}
                onValueChange={setPassword}
                error={errorPassword}
            />
            <SeaComponentsModule.PasswordField
                title="Enter your password again"
                value={passwordAgain}
                onValueChange={setPasswordAgain}
                error={errorPasswordAgain}
            />
            <div className="mainContainer_content_loginContainer_rememberContainer">
                <SeaComponentsModule.Checkbox
                    checkboxName={"Remember me"}
                    value={remember}
                    onValueChange={setRemember}
                />
            </div>
            <div className="mainContainer_content_loginContainer_buttonGroup">
                <SeaComponentsModule.Button text="SignUp" onClick={() => {}} />
                <SeaComponentsModule.Button
                    text="Login"
                    onClick={() => {
                        setAuthState(StatesAuth.Login);
                    }}
                />
            </div>
        </>
    );
}
