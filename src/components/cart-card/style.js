import styled from "styled-components";
import BtnRemove from "../../assets/icons/icon-delete.svg";

export const CartItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 1280px;
    height: 200px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px 30px;
    margin-bottom: 10px;
    position: relative;
`;
export const BtnDelete = styled.button`
    position: absolute;
    top: 6px;
    right: 6px;
    height: 22px;
    width: 22px;
    background: url("../../assets/icons/icon-delete.svg") no-repeat;
    background-size: contain;
    background-position: center;
`;

export const ProdImg = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 10px;
`;

export const CheckBox = styled.input`
    height: 20px;
    width: 20px;
    appearance: none;
    border: 2px solid #3a4768;
    border-radius: 50px;
    cursor: pointer;
    margin-right: 120px;
`;

export const ProdBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 64px 0 21px;
`;

export const TxtParcel = styled.p`
    color: #767676;
    font-size: 16px;
    margin-top: 40px;
`;
export const PriceBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 130px;
    margin-left: 200px;
`;

export const AddPrice = styled.strong`
    font-weight: 700;
    font-size: 18px;
    color: #eb5757;
`;

export const BtnOrder = styled.button`
    width: 100%;
    height: 40px;
    font-size: 16px;
    background: #3a4768;
    border-radius: 5px;
    color: #fff;
    margin-top: 26px;
`;
