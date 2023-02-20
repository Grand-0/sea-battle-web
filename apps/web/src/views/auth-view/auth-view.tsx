import React from "react";

import "./auth-view.scss";

import logo from "../../../public/shipBoat.svg";
import logogo from "../../../public/shipJapan.svg";

import { useState } from "react";
import { StatesAuth } from "../../states/auth-state";
import { LoginForm } from "../../forms/login/login-form";
import { SignUpForm } from "../../forms/sign-up/sign-up-form";

export function AuthView() {
    const [isSignUp, setSignUp] = useState<StatesAuth>(StatesAuth.Login);

    return (
        <div className="mainContainer">
            <div className="mainContainer_content">
                <div className="mainContainer_content_loginContainer">
                    <div className="mainContainer_content_loginContainer_logoFrame">
                        <img src={logo} alt="logo" />
                        <h2>Sea Battle</h2>
                    </div>
                    <h2 className="mainContainer_content_loginContainer_info">
                        Sea battle game recreated in 3D
                    </h2>
                    <h4 className="mainContainer_content_loginContainer_subInfo">
                        Welcome, please sign in or sign up
                    </h4>
                    {isSignUp === StatesAuth.Login ? (
                        <LoginForm setAuthState={setSignUp} />
                    ) : (
                        <SignUpForm setAuthState={setSignUp} />
                    )}
                </div>
                <div className="mainContainer_content_illustrationContainer">
                    <img src={logogo} alt="logogo" />
                </div>
            </div>
        </div>
    );
}
