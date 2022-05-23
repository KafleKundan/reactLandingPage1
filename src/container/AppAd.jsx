import React from "react";
import InfoSecComp from "../components/InfoSecComp";
import IMAGES from "../static";
import { LogoApple, LogoGooglePlaystore } from "react-ionicons";
const AppAd = () => {
    return (
        <div className="bg-blue-100 w-full flex mb-10 flex-col-reverse md-t:flex-row">
            <div className="left md-t:w-1/2 w-full flex  justify-center flex-col items-center py-3">
                <div className="md-t:w-96 w-80p mt-3 md-t:mt-0">
                    <InfoSecComp
                        topBtnText="Get Our Application"
                        topBtnCss="w-full text-center md-t:w-fit text-left"
                        headingTxt="You Can Easily Find This App…!"
                        headingCss="md-t:text-3xl text-lg text-center md-t:text-left "
                        paraTxt="I say chap that&#39;s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant."
                        paraCss="text-xs  text-center md-t:text-left md-t:text-base"
                    />
                </div>
                <div className="DowmloadBtns md:w-96 w-95p flex justify-between items-start px-2 md-t:px-0">
                    <a
                        href="/"
                        className="bg-white w-45p shadow-2xl rounded-2xl"
                    >
                        <div className="flex flex-row justify-between px-3 py-1">
                            <div className="w-1/4 flex items-center ">
                                <LogoApple width="100%" height="auto" />
                            </div>
                            <div className="px-1 py-2 w-3/4">
                                <h5 className="text-gray-400 md-t:text-xs text-xxs  font-semibold">
                                    Download on the
                                </h5>
                                <p className="text-sm font-bold">App Store</p>
                            </div>
                        </div>
                    </a>
                    <a
                        href="/"
                        className="bg-black w-45p shadow-2xl rounded-2xl text-white"
                    >
                        <div className="flex flex-row justify-between px-3 py-1">
                            <div className="w-1/4 flex items-center ">
                                <LogoGooglePlaystore width="100%" height="auto" color="white"/>
                            </div>
                            <div className="px-1 py-2 w-3/4">
                                <h5 className="text-gray-400 md-t:text-xs text-xxs font-semibold">
                                    Download on the
                                </h5>
                                <p className="text-sm font-bold">Play Store</p>
                            </div>
                        </div>
                    </a>
                    
                </div>
            </div>
            <div className="right w-full md-t:w-1/2">
                <img src={IMAGES.AppAdImgRight} alt="" />
            </div>
        </div>
    );
};

export default AppAd;
