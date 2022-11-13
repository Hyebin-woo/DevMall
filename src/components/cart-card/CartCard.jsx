import React from "react";
import {
    CartItem,
    BtnDelete,
    ProdImg,
    CheckBox,
    ProdBox,
    TxtParcel,
    PriceBox,
    AddPrice,
    BtnOrder,
} from "./style";

import SampleImg from "../../assets/images/sample.svg";
import ProdInfo from "../common/prodInfo/ProdInfo";
import NumBox from "../../components/common/numbox/NumBox";

const CartCard = () => {
    return (
        <CartItem>
            <BtnDelete type="button" />
            <CheckBox type="checkbox" name="" value="" />
            <ProdImg src={SampleImg} alt="제품사진" />
            <ProdBox>
                <ProdInfo fontStoreName={14} fontProName={18} ProdPrice={16} />
                <TxtParcel>택배배송/무료배송 </TxtParcel>
            </ProdBox>
            <NumBox />
            <PriceBox>
                <AddPrice>200000원</AddPrice>
                <BtnOrder type="button">주문하기</BtnOrder>
            </PriceBox>
        </CartItem>
    );
};

export default CartCard;
