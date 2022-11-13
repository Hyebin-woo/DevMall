import styled from "styled-components";

export const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 107px;
    padding: 20px 150px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;
export const LeftWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchBox = styled.div`
    width: 400px;
    height: 46px;
    border: 2px solid #3a4768;
    border-radius: 50px;
    margin: 20px 0 0 20px;
`;

export const SearchInput = styled.input`
    padding: 13px 0 13px 22px;
`;
export const RightWrap = styled.div`
    margin-left: auto;
    display: flex;
    gap: 26px;
`;
export const Logo = styled.img`
    cursor: pointer;
`;
