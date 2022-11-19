import React from "react";
import {
    Main,
    TopTxt,
    TopTitle,
    TopBox,
    BtnUpload,
    StockSection,
    ThBox,
    ThTxt,
} from "./style";
import Header from "../../components/header/Header";
import StockCard from "../../components/stock-card/StockCard";
import { ReactComponent as IconPlus } from "../../assets/icons/icon-plus.svg";

const SellerCenterPage = () => {
    return (
        <>
            <Header />
            <Main>
                <TopBox>
                    <div>
                        <TopTxt>대시보드</TopTxt>
                        <TopTitle>백엔드 글로벌</TopTitle>
                    </div>
                    <BtnUpload type="button">
                        <IconPlus />
                        <span>상품업로드</span>
                    </BtnUpload>
                </TopBox>
                <StockSection>
                    <ThBox>
                        <ThTxt>상품정보</ThTxt>
                        <ThTxt>판매가격</ThTxt>
                        <ThTxt>수정</ThTxt>
                        <ThTxt>삭제</ThTxt>
                    </ThBox>
                    <ul>
                        <StockCard />
                        <StockCard />
                    </ul>
                </StockSection>
            </Main>
        </>
    );
};

export default SellerCenterPage;
