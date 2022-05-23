import React from "react";

const CoupleButtons = (props) => {
    return (
        <>
            <div className={props.divCss}>
                <button className={`${props.lightBtnCss}  mx-1 bg-blue-100 rounded-3xl text-blue-500 font-medium  `}>
                    {props.lightBtn}
                </button>
                <button className={` ${props.darkBtnCss} mx-1 bg-blue-600 rounded-3xl text-white font-medium `}>
                    {props.darkBtn}
                </button>
            </div>
        </>
    );
};

export default CoupleButtons;
