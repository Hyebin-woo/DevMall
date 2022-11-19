import React from "react";
import {
    AddWrap,
    Label,
    Form,
    ImgBox,
    InfoBox,
    Input,
    NumInput,
    FlexBox,
    NumSpan,
    LabelRadio,
    TxtDetail,
    BtnBox,
    BtnNo,
    BtnSave,
} from "./style";

const AddProd = () => {
    return (
        <AddWrap>
            <Form>
                <FlexBox>
                    <Label>
                        상품이미지
                        <ImgBox></ImgBox>
                    </Label>

                    <InfoBox>
                        <Label>상품명</Label>
                        <Input type="text" />
                        <Label>판매가</Label>
                        <FlexBox>
                            <NumInput type="text" />
                            <NumSpan>원</NumSpan>
                        </FlexBox>
                        <Label>배송방법</Label>
                        <FlexBox>
                            <input type="radio" />
                            <LabelRadio>택배,소포,등기</LabelRadio>
                            <input type="radio" />
                            <LabelRadio>직접배송(화물배달)</LabelRadio>
                        </FlexBox>
                        <Label>기본 배송비</Label>
                        <FlexBox>
                            <NumInput type="text" />
                            <NumSpan>원</NumSpan>
                        </FlexBox>
                        <Label>재고</Label>
                        <FlexBox>
                            <NumInput type="text" />
                            <NumSpan>개</NumSpan>
                        </FlexBox>
                    </InfoBox>
                </FlexBox>
                <Label>상품 상세 정보</Label>
                <TxtDetail />
                <BtnBox>
                    <BtnNo>취소</BtnNo>
                    <BtnSave>저장</BtnSave>
                </BtnBox>
            </Form>
        </AddWrap>
    );
};

export default AddProd;
