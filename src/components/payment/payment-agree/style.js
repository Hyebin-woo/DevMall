import styled from "styled-components";

export const PayWrap = styled.section`
    width: 480px;
    display: flex;
    flex-direction: column;

    h2 {
        font-weight: 500;
        font-size: 24px;
        padding-bottom: 18px;
    }
`;

export const PayBox = styled.div`
    width: 480px;
    /* padding: 34px 30px; */
    border: 2px solid #3a4768;
    border-radius: 10px;
`;

export const PriceBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

export const TxtPrice = styled.p`
    font-weight: 400;
    font-size: 16px;
`;

export const Price = styled.p`
    font-weight: 700;
    font-size: 18px;
`;

export const TotalPrice = styled.p`
    font-weight: 700;
    font-size: 24px;
    color: #eb5757;
`;

export const AgreeBox = styled.div`
    background: #f2f2f2;
    text-align: center;
    padding: 30px 30px 32px;
    border-radius: 0px 0px 10px 10px;
    span {
        font-size: 16px;
        margin-left: 5px;
    }
`;

export const BtnPayment = styled.button`
    width: 220px;
    height: 68px;
    background: #3a4768;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    margin-top: 30px;
`;
