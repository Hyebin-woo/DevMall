import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import JoinPage from "../pages/join/JoinPage";
import ProdDetailPage from "../pages/detail/ProdDetailPage";
import CartPage from "../pages/cart/CartPage";
import PaymentPage from "../pages/payment/PaymentPage";
import NotFoundPage from "../pages/404/NotFoundPage";
import SellerCenterPage from "../pages/seller-center/SellerCenterPage";
import AddProdPage from "../pages/seller-makeprod/AddProdPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPage />} />
                <Route path="/detail" element={<ProdDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/sellercenter" element={<SellerCenterPage />} />
                <Route path="/addproduct" element={<AddProdPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
