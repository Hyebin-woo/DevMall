import styled from "styled-components";

export const PaymentItem = styled.li`
    display: grid;
    grid-template-columns: 4fr 2fr 1.5fr 1.5fr;
    margin-bottom: 16px;
    padding: 24px 7px;
    border-bottom: 1px solid #c4c4c4;
    place-items: center;
`;

export const ImgBox = styled.div`
    margin-right: 36px;
    img {
        border-radius: 10px;
        width: 104px;
        height: 104px;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    margin-right: auto;
`;

export const Txt = styled.p`
    font-size: 16px;
    color: #767676;
    margin: 12px 0;
`;
export const TxtProd = styled.p`
    font-weight: 500;
    font-size: 18px;
`;

export const TxtDi = styled.span`
    font-size: 18px;
    color: #767676;
`;

export const TxtPrice = styled.span`
    font-weight: 700;
    font-size: 18px;
`;
