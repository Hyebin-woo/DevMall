import styled from "styled-components";

export const ProdInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    //padding-top: 18px;
`;

export const StoreName = styled.h3`
    font-size: ${(props) => props.fontStoreName}px;
    color: #767676;
`;
export const ProdName = styled.h2`
    width: 250px;
    font-size: ${(props) => props.fontProName}px;
`;

export const ProdPrice = styled.p`
    font-size: ${(props) => props.fontProdPrice}px;
    font-weight: 700;
`;
