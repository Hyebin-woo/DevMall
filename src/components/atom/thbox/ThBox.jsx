import React from "react";
import { ThWrap, ThTxt } from "./style";

const ThBox = (props) => {
    const { bgColor, one, two, three, four } = props;
    return (
        <ThWrap bgColor={bgColor}>
            <ThTxt>{one}</ThTxt>
            <ThTxt>{two}</ThTxt>
            <ThTxt>{three}</ThTxt>
            <ThTxt>{four}</ThTxt>
        </ThWrap>
    );
};

export default ThBox;
