import React from "react";
import {
    Main,
    TopTxt,
    TopTitle,
    TopBox,
    BtnUpload,
    StockSection,
} from "./style";
import Header from "../../components/header/Header";
import StockCard from "../../components/stock-card/StockCard";
import { ReactComponent as IconPlus } from "../../assets/icons/icon-plus.svg";
import ThBox from "../../components/atom/thbox/ThBox";

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
                    <ThBox
                        bgColor={"#fff"}
                        one={"상품정보"}
                        two={"판매가격"}
                        three={"수정"}
                        four={"삭제"}
                    />
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
