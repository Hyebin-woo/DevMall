import React from "react";

import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import { ProdWrap } from "./style";
import ProdCard from "../../components/prod/prod-card/ProdCard";

const HomePage = () => {
    return (
        <>
            <Header />
            <Banner />
            <ProdWrap>
                <ProdCard />
            </ProdWrap>
        </>
    );
};

export default HomePage;
