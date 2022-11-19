import React from "react";
import { StyledButton } from "./style";

const Button = (props) => {
    const { content, disabled } = props;
    return (
        <>
            <StyledButton type="button" disabled={disabled}>
                {content}
            </StyledButton>
        </>
    );
};

export default Button;
