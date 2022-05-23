import React from "react";
import CoupleButtons from "../components/CoupleButtons";
import InfoSecComp from "../components/InfoSecComp";
import IMAGES from "../static";

const Hero = () => {
    return (
        <div className="Hero lg:w-4/5 w-full  justify-evenly mx-auto h-full min-h-screen flex items-center justify-center">
            <div className="sections w-full flex justify-between h-full my-20">
                {/* left section  */}
                <section className="  md-t:w-1/2 md-t:mx-0  w-full  inline-block px-5  py-5 my-auto">
                    <InfoSecComp
                        topBtnCss="text-blue-600 bg-blue-100 px-2 py-2"
                        topBtnText="Network Commuinty"
                        headingTxt="Your Solutions For Community!"
                        headingCss="text-4xl md-t:text-5xl"
                        paraCss=""
                        paraTxt="More than 2 billion people in over countries use socibook to stay in touch with friends &amp; family."
                    />
                    <div className="flex mt-2">
                        <CoupleButtons
                            divCss="flex flex-row-reverse"
                            lightBtn="Invite Friend"
                            lightBtnCss=" bg-transparent border-solid border-2 border-blue-600 text-sm p-4"
                            darkBtn=" About More"
                            darkBtnCss=" text-sm p-4"
                        />
                    </div>
                </section>
                {/* Right section  */}
                <section className="w-1/2   hidden md-t:inline-block my-auto">
                    <img src={IMAGES.heroRight} alt="" />
                </section>
            </div>
        </div>
    );
};

export default Hero;
