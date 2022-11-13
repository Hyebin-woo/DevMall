import React from "react";
import {
    TotalWrap,
    PriceBox,
    TxtTitle,
    NumPrice,
    TotalPrice,
    WonPrice,
} from "./style";

const CartTotal = () => {
    return (
        <TotalWrap>
            <PriceBox>
                <TxtTitle>총 상품금액</TxtTitle>
                <NumPrice>
                    45,500
                    <WonPrice>원</WonPrice>
                </NumPrice>
            </PriceBox>
            <PriceBox>
                <TxtTitle>상품 할인</TxtTitle>
                <NumPrice>
                    0<WonPrice>원</WonPrice>
                </NumPrice>
            </PriceBox>
            <PriceBox>
                <TxtTitle>배송비</TxtTitle>
                <NumPrice>
                    0<WonPrice>원</WonPrice>
                </NumPrice>
            </PriceBox>

            <PriceBox>
                <TxtTitle>결제 예정 금액</TxtTitle>
                <TotalPrice>
                    46000<WonPrice>원</WonPrice>
                </TotalPrice>
            </PriceBox>
        </TotalWrap>
    );
};

export default CartTotal;
