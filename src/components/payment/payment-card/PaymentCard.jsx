import React from "react";
import {
    PaymentItem,
    ImgBox,
    FlexBox,
    Txt,
    TxtProd,
    TxtDi,
    TxtPrice,
} from "./style";
import Sample from "../../../assets/images/sample.svg";

const PaymentCard = () => {
    return (
        <>
            <PaymentItem>
                <FlexBox>
                    <ImgBox>
                        <img src={Sample} alt="" />
                    </ImgBox>
                    <div>
                        <Txt>백엔드글로벌</Txt>
                        <TxtProd>딥러닝 개발자 무릎담요</TxtProd>
                        <Txt>수량1개</Txt>
                    </div>
                </FlexBox>
                <TxtDi>-</TxtDi>
                <TxtDi>무료배송</TxtDi>
                <TxtPrice>17500원</TxtPrice>
            </PaymentItem>
        </>
    );
};

export default PaymentCard;
