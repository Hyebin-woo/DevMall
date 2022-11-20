import React from "react";
import { Main, Title, InfoSection } from "./style";
import ThBox from "../../components/atom/thbox/ThBox";

import Header from "../../components/header/Header";
import PaymentCard from "../../components/payment/payment-card/PaymentCard";
import PaymentDelivery from "../../components/payment/payment-delivery/PaymentDelivery";
import PaymentMethod from "../../components/payment/payment-method/PaymentMethod";
import PaymentAgree from "../../components/payment/payment-agree/PaymentAgree";

const PaymentPage = () => {
    return (
        <>
            <Header />
            <Main>
                <Title>주문/결제하기</Title>
                <InfoSection>
                    <ThBox
                        bgColor={"#F2F2F2"}
                        one={"상품정보"}
                        two={"할인"}
                        three={"배송비"}
                        four={"주문금액"}
                    />
                    <ul>
                        <PaymentCard />
                        <PaymentCard />
                    </ul>
                </InfoSection>

                <PaymentDelivery />
                <PaymentMethod />
                <PaymentAgree />
            </Main>
        </>
    );
};

export default PaymentPage;
