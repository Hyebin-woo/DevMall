import React from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/header-logo.svg";
import IconCart from "../../assets/icons/icon-shopping-cart.svg";
import IconMyPage from "../../assets/icons/icon-my-page.svg";
import {
    HeaderWrap,
    LeftWrap,
    SearchBox,
    SearchInput,
    RightWrap,
    Logo,
} from "./style";

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderWrap>
            <LeftWrap>
                <Logo
                    src={HeaderLogo}
                    alt="헤더로고"
                    onClick={() => navigate("/")}
                />
                <SearchBox>
                    <SearchInput
                        type="text"
                        class="search-input"
                        placeholder="상품을 검색해보세요.!"
                    />
                </SearchBox>
            </LeftWrap>
            <RightWrap>
                <Link to="/cart">
                    <img src={IconCart} alt="장바구니" />
                </Link>
                <button type="button">
                    <img src={IconMyPage} alt="마이페이지" />
                </button>
            </RightWrap>
        </HeaderWrap>
    );
};

export default Header;
