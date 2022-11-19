import React from "react";
import { ProdInfoBox, StoreName, ProdName, ProdPrice } from "./style";

const ProdInfo = (props) => {
    const { fontStoreName, fontProName, fontProdPrice } = props;
    return (
        <ProdInfoBox>
            <StoreName fontStoreName={fontStoreName}>가게이름</StoreName>
            <ProdName fontProName={fontProName}>
                제품이름제품이름제품이름
            </ProdName>
            <ProdPrice fontProdPrice={fontProdPrice}>만원만원</ProdPrice>
        </ProdInfoBox>
    );
};

export default ProdInfo;
