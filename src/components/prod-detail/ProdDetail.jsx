import React from "react";
import {
    GetWrap,
    ProInfoBox,
    InputBox,
    ChangeBox,
    NumInput,
    BtnBuy,
    BtnBasket,
    StoreName,
    ProdName,
    ProdPrice,
    TxtParcel,
} from "./style";

import SampleImg from "../../assets/images/sample.svg";
import IconMinus from "../../assets/icons/icon-minus-line.svg";
import IconPlus from "../../assets/icons/icon-plus-line.svg";

const ProdDetail = () => {
    return (
        <GetWrap>
            <h1 class="ir">상품 상세 정보</h1>
            <img class="product-img" src={SampleImg} alt="상품이미지" />

            <ProInfoBox>
                <StoreName>우당탕탕 라이캣의 실험실</StoreName>
                <ProdName>Hack Your Life 개발자 노트북 파우치</ProdName>
                <ProdPrice>29000원</ProdPrice>
                <TxtParcel>택배배송/무료배송</TxtParcel>
                <InputBox>
                    <button class="btn-minus">
                        <img src={IconMinus} alt="수량 마이너스" />
                    </button>
                    <NumInput
                        type="text"
                        value="1"
                        class="quantity_input"
                        maxlength="6"
                        autocomplete="off"
                    />
                    <button class="btn-plus">
                        <img src={IconPlus} alt="수량 플러스" />
                    </button>
                </InputBox>
                <div>
                    <ChangeBox>
                        <p>총 상품 금액</p>
                        <ChangeBox>
                            <p>총 수량:</p>
                            <span class="txt-num">개</span>
                            <p class="total_price">17000</p>
                            <span class="txt-won"> 원</span>
                        </ChangeBox>
                    </ChangeBox>
                    <BtnBuy type="button">바로 구매</BtnBuy>
                    <BtnBasket type="button">장바구니</BtnBasket>
                </div>
            </ProInfoBox>
        </GetWrap>
    );
};

export default ProdDetail;
