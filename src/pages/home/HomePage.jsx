import React from "react";

import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import { ProdWrap } from "./style";
import ProdCard from "../../components/prod-card/ProdCard";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
    return (
        <>
            <Header />
            <Banner />
            <ProdWrap>
                <ProdCard />
            </ProdWrap>
            <Footer />
        </>
    );
};

export default HomePage;
