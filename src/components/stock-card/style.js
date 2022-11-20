import styled from "styled-components";

export const Item = styled.li`
    width: 100%;
    height: 150px;
    padding: 20px 15px;
    border-bottom: 1px solid #c4c4c4;
    display: grid;
    grid-template-columns: 4fr 2fr 1.5fr 1.5fr;
    place-items: center;
`;

export const ProdBox = styled.div`
    margin-top: 20px;
`;
export const ItemImg = styled.img`
    width: 100px;
    border-radius: 50%;
    margin: 0 20px 0 10px;
`;

export const StockBox = styled.div`
    display: flex;
    margin-right: 200px;
`;

export const TxtProd = styled.p`
    font-weight: 500;
    font-size: 18px;
`;

export const StockTxt = styled.p`
    font-size: 18px;
    color: #767676;
    margin-top: 10px;
`;

export const StockNum = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: #767676;
`;
export const BtnModify = styled.button`
    width: 80px;
    height: 40px;
    font-size: 16px;
    background: #3a4768;
    border-radius: 5px;
    color: #fff;
`;

export const BtnDelete = styled.button`
    width: 80px;
    height: 40px;
    font-size: 16px;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;
