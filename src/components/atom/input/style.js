import styled from "styled-components";

export const InputBox = styled.div`
    width: 100%;
`;

export const Label = styled.label`
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
    color: #767676;
`;

export const InputData = styled.input`
    padding: 7px 10px;
    display: block;
    width: 100%;
    height: 50px;
    font-size: 16px;
    margin-bottom: 40px;
    background-color: #fff;
    border-bottom: 1px solid #b6b6b6;
    &:focus-within {
        font-weight: bold;
        background-color: #fff;
    }
`;
