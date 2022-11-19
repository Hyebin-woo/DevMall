import React from "react";

import { InputBox, NumInput } from "./style";
import IconMinus from "../../../assets/icons/icon-minus-line.svg";
import IconPlus from "../../../assets/icons/icon-plus-line.svg";

const NumBox = () => {
    return (
        <InputBox>
            <button class="btn-minus">
                <img src={IconMinus} alt="수량 마이너스" />
            </button>
            <NumInput
                type="text"
                value="1"
                class="quantity_input"
                maxlength="6"
                autocomplete="off"
            />
            <button class="btn-plus">
                <img src={IconPlus} alt="수량 플러스" />
            </button>
        </InputBox>
    );
};

export default NumBox;
