import React from "react";
import { Link } from "react-router-dom";
import { Wrap } from "./style";
import LogoLogin from "../../../assets/images/LogoLink.svg";

const Logo = () => {
    return (
        <Wrap>
            <Link to={"/"}>
                <img src={LogoLogin} alt="로그인로고" />
            </Link>
        </Wrap>
    );
};

export default Logo;
