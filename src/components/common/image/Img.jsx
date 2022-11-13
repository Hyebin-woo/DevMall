import React from "react";
import { Image } from "./style";

const Img = () => {
    const { src, alt, width, height } = props;

    return <Image src={src} alt={alt} width={width} height={height} />;
};

export default Img;
