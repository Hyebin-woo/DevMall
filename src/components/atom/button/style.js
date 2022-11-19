import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    height: 60px;
    border-radius: 45px;
    background-color: #3a4768;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    :disabled {
        background-color: #c4c4c4;
    }
`;
