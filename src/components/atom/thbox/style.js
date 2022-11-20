import styled from "styled-components";

export const ThWrap = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr 1.5fr 1.5fr;
    text-align: center;
    padding: 18px 20px;
    background: ${(props) => props.bgColor};
    /* border-bottom: 1px solid #c4c4c4; */
    border-radius: 5px 5px 0 0;
`;

export const ThTxt = styled.p`
    font-weight: 400;
    font-size: 18px;
`;
