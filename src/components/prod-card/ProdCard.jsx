import React from "react";
import { Link } from "react-router-dom";

import { CardWrap, ProdInfoBox, StoreName, ProdName, ProdPrice } from "./style";
import SampleImg from "../../assets/images/sample.svg";

const ProdCard = () => {
    return (
        <CardWrap>
            <h1 class="ir">상품정보</h1>
            <Link to={"/detail"}>
                <img src={SampleImg} alt="상품 이미지" />
            </Link>
            <ProdInfoBox>
                <StoreName>우당탕탕 라이캣의 실험실</StoreName>
                <Link to={"/detail"}>
                    <ProdName>Hack Your Life 개발자 노트북 파우치</ProdName>
                </Link>
                <ProdPrice>29000원</ProdPrice>
            </ProdInfoBox>
        </CardWrap>
    );
};

export default ProdCard;
