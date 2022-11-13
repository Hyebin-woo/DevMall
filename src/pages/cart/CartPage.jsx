import React from "react";

import { CartMain, TxtTitle, CartBox, CheckBox, TxtTab } from "./style";
import Header from "../../components/header/Header";
import CartCard from "../../components/cart-card/CartCard";
import CartTotal from "../../components/cart-total/CartTotal";

const CartPage = () => {
    return (
        <>
            <Header />
            <CartMain>
                <TxtTitle>장바구니</TxtTitle>
                <CartBox>
                    <CheckBox type="checkbox" name="" value="" />
                    <TxtTab>상품정보</TxtTab>
                    <TxtTab>수량</TxtTab>
                    <TxtTab>상품금액</TxtTab>
                </CartBox>
                <ul>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </ul>
                <CartTotal />
            </CartMain>
        </>
    );
};

export default CartPage;
