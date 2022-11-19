import React from "react";
import { NavBox, NavItem } from "./style";

const Nav = (props) => {
    const { left, right } = props;
    return (
        <NavBox>
            <ul>
                <NavItem>{left}</NavItem>
                <NavItem>{right}</NavItem>
            </ul>
        </NavBox>
    );
};

export default Nav;
