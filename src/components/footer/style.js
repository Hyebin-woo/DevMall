import styled from "styled-components";

export const FooterWrap = styled.footer`
    width: 100%;
    background-color: #f2f2f2;
    padding: 53px 200px 38px;
    filter: drop-shadow(4px 0 4px rgba(0, 0, 0, 0.25));
`;

export const InfoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #828282;
    padding-bottom: 28px;
`;

export const NavLink = styled.a`
    position: relative;
    margin-right: 14px;

    &:after {
        position: absolute;
        content: "";
        width: 1px;
        height: 14px;
        top: -1;
        right: 0;
        background-color: #000;
        margin-right: -6px;
    }
`;
export const BoxSns = styled.div`
    float: right;
`;

export const IconSns = styled.img`
    width: 32px;
    margin-left: 20px;
`;

export const Address = styled.address`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    gap: 10px;
    color: #767676;
`;
