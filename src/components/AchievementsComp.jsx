import React from "react";

const AchievementsComp = (props) => {
    return (
        <div className={`shadow-2xl ${props.AchievementsCompCss} w-80p px-4  md-t:py-5 py-4 md-t:w-80 md-t:my-10 my-4 lg:mx-4 md-t:mx-2  rounded-2xl `}>
            <div className="rating flex  items-center my-2">
                {props.iconImg}
                <h4 className={`${props.ratingTxtCss} mx-2 my-0 text-sm font-bold`}>{props.ratingTxt}</h4>
            </div>
            <div className="stats flex items-center mb-3">
                <img
                    src={props.statsImg}
                    alt=""
                    className={`${props.statsImgCss} w-14 my-0`}
                />
                <h4 className={`${props.statsTxtCss} text-gray-600 text-sm my-0`}>
                    <span className={`${props.statsSpanTxtCss} pr-1`}>{props.statsSpanTxt}</span>
                    {props.statsTxt}
                </h4>
            </div>
            <div className="para w-full mb-2">
                <p className={`${props.paraTxtCss} text-sm text-gray-600`}>
                    {props.paraTxt}
                </p>
            </div>
            <div className="linksBtn">
                <button className={`${props.linksBtnCss} text-sm text-bold mt-3`}>{props.linkBtnTxt}</button>
            </div>
        </div>
    );
};

export default AchievementsComp;
