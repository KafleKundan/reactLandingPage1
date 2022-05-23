import React from "react";
import AchievementsComp from "../components/AchievementsComp";
import CoupleButtons from "../components/CoupleButtons";
import { StarOutline, TrophyOutline } from "react-ionicons";
import IMAGES from "../static";

import InfoSecComp from "../components/InfoSecComp";

const AchievementsCont = () => {
    return (
        <div className="">
            <div className=" h-full w-full  mx-auto  flex items-center justify-center md-t:flex-row flex-col my-2 md-t:px-5 px-3 flex-wrap">
                <AchievementsComp
                    AchievementsCompCss=" "
                    iconImg={<StarOutline color="rgba(0,0,255,0.6)" />}
                    ratingTxt="4.8 Rating"
                    ratingTxtCss=""
                    statsImg={IMAGES.achievementsLeft}
                    statsImgCss=""
                    statsSpanTxt="+836k"
                    statsSpanTxtCss="text-blue-600"
                    statsTxt="Members"
                    statsTxtCss=""
                    paraTxt="More than 2 billion we people over countries use socibooks we to stay in touch with friends."
                    paraTxtCss=""
                    linkBtnTxt="Join Our Community&#8594;"
                    linksBtnCss=" text-blue-600"
                />
                <AchievementsComp
                    iconImg={<TrophyOutline color="rgba(0,0,255,0.6)" />}
                    ratingTxt="Awards"
                    ratingTxtCss=""
                    statsImg={IMAGES.achievementsMid}
                    statsImgCss="w-9"
                    statsSpanTxt="+836k"
                    statsSpanTxtCss="text-blue-600"
                    statsTxt="Members"
                    statsTxtCss=""
                    paraTxt="More than 2 billion we people over countries use socibooks we to stay in touch with friends."
                    paraTxtCss=""
                    linkBtnTxt="Go To Awards&#8594;"
                    linksBtnCss=""
                />
                <div className="rightBoxAchievements  w-80p md-t:py-5 py-3 md-t:w-96 md-t:my-10 my-2   rounded-2xl md:mx-12">
                    <InfoSecComp
                        topBtnText="Our Achievement"
                        topBtnCss="text-center w-full "
                        headingTxt="We are Connecting You The Digital Life."
                        headingCss="text-center"
                        paraTxt="The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants."
                        paraCss="text-center"
                    />
                    <CoupleButtons
                        darkBtn="Discover Me&#8594;"
                        darkBtnCss="py-3 px-4"
                        lightBtnCss="hidden"
                        divCss="flex items-center justify-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default AchievementsCont;
