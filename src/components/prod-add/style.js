import styled from "styled-components";

export const AddWrap = styled.section`
    width: 1320px;
    display: flex;
    margin-left: 80px;
`;

export const Label = styled.label`
    font-weight: 400;
    font-size: 16px;
    color: #767676;
`;

export const Form = styled.form`
    /* display: flex; */
`;

export const ImgBox = styled.div`
    background: #c4c4c4;
    width: 454px;
    height: 454px;
    margin-top: 10px;
    margin-right: 40px;
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
`;

export const Input = styled.input`
    width: 100%;
    height: 54px;
    margin: 10px 0 16px 0;
    padding: 16px;
    font-weight: 400;
    font-size: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;
export const FlexBox = styled.div`
    display: flex;
    input[type="radio"] {
        display: none;
    }
`;
export const NumInput = styled.input`
    width: 220px;
    height: 54px;
    margin: 10px 0 16px 0;
    padding: 16px;
    font-weight: 400;
    font-size: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 5px 0 0 5px;
`;

export const NumSpan = styled.span`
    width: 54px;
    height: 54px;
    background: #c4c4c4;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    padding: 20px;
    margin: 10px 15px 0 0;
`;
export const LabelRadio = styled.label`
    width: 220px;
    height: 68px;
    font-weight: 400;
    font-size: 18px;
    color: #767676;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    margin: 10px 0 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        background: #3a4768;
        color: #fff;
    }
`;
export const TxtDetail = styled.textarea`
    width: 100%;
    height: 400px;
    background: #f2f2f2;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    margin-top: 10px;
    padding: 16px;
    font-weight: 400;
    font-size: 16px;
    resize: none;
    &:focus {
        outline: none;
    }
`;

export const BtnBox = styled.div`
    width: 414px;
    height: 60px;
    display: flex;
    gap: 14px;
    margin-top: 30px;
    margin-left: auto;
`;
export const BtnNo = styled.button`
    width: 200px;
    height: 60px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
`;
export const BtnSave = styled.button`
    width: 200px;
    height: 60px;
    background: #3a4768;
    border-radius: 5px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
`;
