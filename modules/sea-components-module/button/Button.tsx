import React from "react";
import "./Button.scss";

type ButtonProps = {
    text: string;
    onClick: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            onFocus={(e) => {
                console.log(e.target.style);
            }}
            onClick={() => onClick()}
        >
            {text}
        </button>
    );
}
