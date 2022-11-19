import React, { useState } from "react";
import { Wrap, Form, LinkBox } from "./style";
import { Link } from "react-router-dom";

import Input from "../atom/input/Input";
import Button from "../atom/button/Button";
import Nav from "../atom/nav/Nav";
import Logo from "../atom/logo/Logo";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    return (
        <>
            <Wrap>
                <Logo />
                <Nav left="구매회원 로그인" right="판매회원 로그인" />
                <Form>
                    <Input
                        label={"아이디"}
                        type={"text"}
                        placeholder="아이디를 입력해주세요."
                    />
                    <Input
                        label={"비밀번호"}
                        type={"password"}
                        placeholder="비밀번호를 입력해주세요."
                    />
                    <Button content={"로그인"} disabled={disabled} />
                </Form>
                <LinkBox>
                    <Link to={"/join"}>데브몰 회원가입 </Link>
                </LinkBox>
            </Wrap>
        </>
    );
};

export default Login;
