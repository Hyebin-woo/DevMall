import React from "react";
import { InputBox, Label, InputData } from "./style";
const Input = (props) => {
    const { label, type, placeholder } = props;

    return (
        <InputBox>
            <Label>{label}</Label>
            <InputData
                type={type}
                placeholder={placeholder}
                autocomplete="off"
            />
        </InputBox>
    );
};

export default Input;
