import styled from "styled-components";

export const CartMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
`;

export const TxtTitle = styled.h1`
    font-weight: 700;
    font-size: 36px;
    color: #000000;
    margin-bottom: 52px;
`;

export const CartBox = styled.div`
    margin-bottom: 30px;
    padding: 19px 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 300px;
    background: #f2f2f2;
    border-radius: 10px;
    width: 1280px;
    height: 60px;
`;

export const CheckBox = styled.input`
    height: 20px;
    width: 20px;
    appearance: none;
    border: 2px solid #3a4768;
    border-radius: 50px;
    cursor: pointer;
`;

export const TxtTab = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #000000;
`;
