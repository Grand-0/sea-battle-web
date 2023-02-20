import React from "react";
import { useState } from "react";
import { SeaIconsModule } from "sea-icons-module";
import "./Password.scss";

type PasswordProps = {
    title: string;
    value: string;
    onValueChange: (value: string) => void;
    error: string;
};

export function PasswordField({
    title,
    value,
    onValueChange,
    error,
}: PasswordProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const isError = error ? true : false;

    return (
        <div className={isError ? "passwordError" : "password"}>
            <h4>{title}</h4>
            <div>
                <input
                    type={isOpen ? "text" : "password"}
                    value={value}
                    onChange={(e) => {
                        onValueChange(e.target.value);
                    }}
                />
                {isOpen ? (
                    <SeaIconsModule.LockOpen
                        onClick={() => setIsOpen(!isOpen)}
                    />
                ) : (
                    <SeaIconsModule.LockClose
                        onClick={() => setIsOpen(!isOpen)}
                    />
                )}
            </div>
            {isError ? <h4>{error}</h4> : <></>}
        </div>
    );
}
