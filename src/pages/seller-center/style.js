import styled from "styled-components";
import BtnPlus from "../../assets/icons/icon-plus.svg";

export const Main = styled.main`
    width: 1100px;
    margin: 0 auto;
    padding: 44px 0 96px;
`;
export const TopTxt = styled.span`
    font-weight: 700;
    font-size: 36px;
`;
export const TopTitle = styled.h2`
    display: inline;
    font-weight: 500;
    font-size: 36px;
    color: #3a4768;
    margin-left: 16px;
`;

export const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BtnUpload = styled.button`
    width: 150px;
    height: 50px;
    border: 2px solid #c4c4c4;
    border-radius: 5px;
    span {
        font-weight: 600;
        font-size: 18px;
        color: #3a4768;
        vertical-align: 8px;
        margin-left: 7px;
    }
`;

export const StockSection = styled.section`
    height: 884px;
    background: #f2f2f2;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    margin-top: 42px;
`;

export const ThBox = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr 1fr 1fr;
    text-align: center;
    border-bottom: 1px solid #c4c4c4;
    border-radius: 5px 5px 0 0;
    padding: 18px 20px;
    background: #fff;
`;

export const ThTxt = styled.p`
    font-weight: 400;
    font-size: 18px;
`;
