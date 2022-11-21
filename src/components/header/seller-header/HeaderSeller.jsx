import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrap, Titile } from "./style";
import HeaderLogo from "../../../assets/images/header-logo.svg";

const HeaderSeller = () => {
    return (
        <HeaderWrap>
            <Link to={"/"}>
                <img src={HeaderLogo} alt="데브몰 로고" />
            </Link>
            <Titile>판매자 센터</Titile>
        </HeaderWrap>
    );
};

export default HeaderSeller;
