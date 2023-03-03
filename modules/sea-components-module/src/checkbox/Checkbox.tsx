import "./Checkbox.scss";
import React from "react";

type CheckboxProps = {
    checkboxName: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
};

export function Checkbox({
    checkboxName,
    value,
    onValueChange,
}: CheckboxProps) {
    return (
        <div className="checkboxContainer">
            <input
                type="checkbox"
                value={value ? "yes" : "no"}
                onClick={() => onValueChange(!value)}
            />
            <label>{checkboxName}</label>
        </div>
    );
}
