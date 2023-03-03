import { SeaIconsModule } from "sea-icons-module";
import "./Input.scss";
import React from "react";

type InputProps = {
    title: string;
    value: string;
    onValueChange: (value: string) => void;
    error: string;
};

export function Input({ title, value, onValueChange, error }: InputProps) {
    const isError = error ? true : false;
    const isText = value ? true : false;

    return (
        <div className={isError ? "inputError" : "input"}>
            <h4>{title}</h4>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                        onValueChange(e.target.value);
                    }}
                />
                {isText ? (
                    <SeaIconsModule.Cross onClick={() => onValueChange("")} />
                ) : (
                    <></>
                )}
            </div>
            {isError ? <h4>{error}</h4> : <></>}
        </div>
    );
}
