import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrap, Txt, BtnBack } from "./style";
import NotFound from "../../assets/images/404.svg";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Wrap>
            <img src={NotFound} alt="404이미지" />
            <Txt>페이지를 찾을 수 없습니다.</Txt>
            <BtnBack type="button" onClick={() => navigate(-1)}>
                이전 페이지
            </BtnBack>
        </Wrap>
    );
};

export default NotFoundPage;
