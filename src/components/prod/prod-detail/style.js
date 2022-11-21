import styled from "styled-components";

export const GetWrap = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    .product-img {
        width: 500px;
        height: 500px;
    }
`;

export const ProInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 50px;
`;
export const StoreName = styled.h3`
    font-size: 18px;
    color: #767676;
`;
export const ProdName = styled.h2`
    font-size: 32px;
`;
export const ProdPrice = styled.strong`
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 138px;
`;
export const TxtParcel = styled.p`
    color: #767676;
    font-size: 16px;
    padding-bottom: 15px;
    border-bottom: 1px solid #767676;
`;

export const InputBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 150px;
    height: 50px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;

export const NumInput = styled.input`
    width: 30px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    padding-left: 20px;
`;
export const ChangeBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
export const BtnBuy = styled.button`
    width: 60%;
    height: 60px;
    background: #3a4768;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
`;
export const BtnBasket = styled.button`
    width: 37%;
    height: 60px;
    background: #767676;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
    margin-left: 14px;
`;
