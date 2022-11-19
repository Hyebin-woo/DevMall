import React from "react";
import { Wrap, Form, BtnBox, BtnCheck, InputBox } from "./style";

import Nav from "../atom/nav/Nav";
import Logo from "../atom/logo/Logo";
import Input from "../atom/input/Input";
import Button from "../atom/button/Button";

const Join = () => {
    return (
        <Wrap>
            <Logo />
            <Nav left="구매회원가입" right="판매회원가입" />
            <Form>
                <BtnBox>
                    <Input label={"아이디"} type={"text"} />
                    <BtnCheck>중복확인</BtnCheck>
                </BtnBox>
                <Input label={"비밀번호"} type={"password"} />
                <Input label={"비밀번호 재확인"} type={"password"} />
                <Input label={"이름"} type={"text"} />

                <Input label={"휴대폰번호"} type={"text"} />
                <Input label={"이메일"} type={"text"} />
                <BtnBox>
                    <Input label={"사업자 등록번호"} type={"text"} />
                    <BtnCheck>인증</BtnCheck>
                </BtnBox>
                <Input label={"스토어 이름"} type={"text"} />
            </Form>
        </Wrap>
    );
};

export default Join;
