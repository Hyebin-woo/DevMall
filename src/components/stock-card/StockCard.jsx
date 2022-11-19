import React from "react";
import {
    Item,
    ProdBox,
    ItemImg,
    StockBox,
    TxtProd,
    StockTxt,
    StockNum,
    BtnModify,
    BtnDelete,
} from "./style";

import Sample from "../../assets/images/sample.svg";

const StockCard = () => {
    return (
        <Item>
            <div>
                <StockBox>
                    <ItemImg src={Sample} alt="상품사진" />
                    <ProdBox>
                        <TxtProd>딥러닝 개발자 무릎 담요</TxtProd>
                        <StockTxt>
                            재고<StockNum>0</StockNum>개
                        </StockTxt>
                    </ProdBox>
                </StockBox>
            </div>
            <TxtProd>17000원</TxtProd>
            <BtnModify>수정</BtnModify>
            <BtnDelete>삭제</BtnDelete>
        </Item>
    );
};

export default StockCard;
