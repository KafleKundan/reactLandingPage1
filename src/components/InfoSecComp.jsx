import React from "react";

const InfoSecComp = (props) => {
    return (
        <>
            <button className={`py-2 text-blue-600 rounded-xl text-xs font-semibold cursor-unset ${props.topBtnCss}`}>
                {props.topBtnText}
            </button>

            <h1 className={` font-bold mb-3 mt-1 ${props.headingCss}`}>
                {props.headingTxt}
            </h1>
            <p className={` ${props.paraCss} text-md text-gray-600 mb-4 `}>
                {props.paraTxt}
            </p>
            
        </>
    );
};

export default InfoSecComp;
