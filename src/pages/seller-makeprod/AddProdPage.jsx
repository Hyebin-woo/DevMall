import React from "react";
import AddProd from "../../components/prod/prod-add/AddProd";
import { Main, Wrap, Aside, SideBox } from "./style";
import Header from "../../components/header/Header";

const AddProdPage = () => {
    return (
        <>
            <Header />
            <Main>
                <h1>상품등록</h1>
                <Wrap>
                    <Aside>
                        <h3>* 상품 등록 주의사항</h3>
                        <SideBox>
                            - 너무 귀여운 사진은 심장이 아파올 수 있습니다.{" "}
                            <br />
                            <br />- 재고와 가격을 정확하게 입력했는지
                            확인부탁드립니다.
                            <br />
                            <br /> - 상품 사진 화질에 신경써주세요.
                            <br />
                            <br /> - 제품에 이상이 없는지 한번 더 검토
                            부탁드립니다.
                        </SideBox>
                    </Aside>
                    <AddProd />
                </Wrap>
            </Main>
        </>
    );
};

export default AddProdPage;
