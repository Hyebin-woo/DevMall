import React from "react";

import {
    PayWrap,
    PayBox,
    PriceBox,
    TxtPrice,
    Price,
    TotalPrice,
    AgreeBox,
    BtnPayment,
} from "./style";

const PaymentAgree = () => {
    return (
        <PayWrap>
            <h2>최종결제 정보</h2>
            <PayBox>
                <PriceBox>
                    <TxtPrice>- 상품금액</TxtPrice>
                    <Price>46500원</Price>
                </PriceBox>
                <PriceBox>
                    <TxtPrice>- 할인금액</TxtPrice>
                    <Price>0원</Price>
                </PriceBox>
                <PriceBox>
                    <TxtPrice>- 배송비</TxtPrice>
                    <Price>0원</Price>
                </PriceBox>
                <PriceBox>
                    <TxtPrice>- 총 결제금액</TxtPrice>
                    <TotalPrice>46500원</TotalPrice>
                </PriceBox>
                <AgreeBox>
                    <input type="checkbox" />
                    <span>
                        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                    </span>
                    <BtnPayment type="button">결제하기</BtnPayment>
                </AgreeBox>
            </PayBox>
        </PayWrap>
    );
};

export default PaymentAgree;
