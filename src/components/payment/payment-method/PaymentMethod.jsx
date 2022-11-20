import React from "react";
import { MethodWrap, MethodBox, Method, LabelRadio } from "./style";

const PaymentMethod = () => {
    return (
        <MethodWrap>
            <h2>결제수단</h2>
            <MethodBox>
                <Method>
                    <input type="radio" />
                    <LabelRadio>신용/체크카드</LabelRadio>
                </Method>
                <Method>
                    <input type="radio" />
                    <LabelRadio>무통장 입금</LabelRadio>
                </Method>
                <Method>
                    <input type="radio" />
                    <LabelRadio>휴대폰 결제</LabelRadio>
                </Method>
                <Method>
                    <input type="radio" />
                    <LabelRadio>네이버 페이</LabelRadio>
                </Method>
            </MethodBox>
        </MethodWrap>
    );
};

export default PaymentMethod;
