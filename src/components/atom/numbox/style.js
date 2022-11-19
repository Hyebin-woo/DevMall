import styled from "styled-components";

export const InputBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 150px;
    height: 50px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    img {
        width: 20px;
        height: 20px;
    }
`;

export const NumInput = styled.input`
    width: 30px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    padding-left: 20px;
`;
