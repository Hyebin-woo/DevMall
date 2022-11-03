import React from "react";
import {
    FooterWrap,
    InfoWrap,
    NavLink,
    BoxSns,
    IconSns,
    Address,
} from "./style";

import Insta from "../../assets/icons/icon-insta.svg";
import FaceB from "../../assets/icons/icon-fb.svg";
import Youtu from "../../assets/icons/icon-yt.svg";

const Footer = () => {
    return (
        <FooterWrap>
            <InfoWrap>
                <h4 className="ir">데브몰 약관 링크</h4>
                <nav>
                    <NavLink href="#">데브몰소개</NavLink>
                    <NavLink href="#">이용약관</NavLink>
                    <NavLink href="#">개인정보처리방침</NavLink>
                    <NavLink href="#">전자금융거래약관</NavLink>
                    <NavLink href="#">청소년보호정책</NavLink>
                    <a href="#">제휴문의</a>
                </nav>
                <BoxSns>
                    <a href="#">
                        <IconSns
                            class="icon-sns"
                            src={Insta}
                            alt="인스타그램"
                        />
                    </a>
                    <a href="#">
                        <IconSns class="icon-sns" src={FaceB} alt="페이스북" />
                    </a>
                    <a href="#">
                        <IconSns class="icon-sns" src={Youtu} alt="유튜브" />
                    </a>
                </BoxSns>
            </InfoWrap>
            <Address>
                <h4 className="ir">데브몰 정보</h4>
                <p>(주) 데브몰</p>
                <p>대표: 우혜빈</p>
                <p>사업자 번호:000-0000-0000</p>
                <p>주소:경기도 화성시 프론트동</p>
            </Address>
        </FooterWrap>
    );
};

export default Footer;
