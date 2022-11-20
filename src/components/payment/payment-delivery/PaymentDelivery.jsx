import React from "react";
import { Section, InputBox, InfoTitle, Label, Input } from "./style";

const PaymentDelivery = () => {
    return (
        <Section>
            <h2>배송정보</h2>
            <form>
                <InfoTitle>주문자 정보</InfoTitle>
                <InputBox>
                    <Label>이름</Label>
                    <Input type="text" />
                </InputBox>
                <InputBox>
                    <Label>휴대폰</Label>
                    <Input type="text" />
                </InputBox>
                <InputBox>
                    <Label>이메일</Label>
                    <Input type="text" />
                </InputBox>
                <InfoTitle>배송지 정보</InfoTitle>
                <InputBox>
                    <Label>수령인</Label>
                    <Input type="text" />
                </InputBox>
                <InputBox>
                    <Label>배송주소</Label>
                    <Input type="text" />
                </InputBox>
                <InputBox>
                    <Label>배송 메시지</Label>
                    <Input type="text" />
                </InputBox>
            </form>
        </Section>
    );
};

export default PaymentDelivery;
