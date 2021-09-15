import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import useQuickBlox from "../../../hooks/useQuickBlox";

function Home() {
    return(
        <>
            <FirstSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
        </>
    )
}

export default Home;
