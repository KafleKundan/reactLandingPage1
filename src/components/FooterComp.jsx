import React from "react";

const FooterComp = (props) => {
    return (
        <div className="w-24 flex flex-col justify-between ">
            <h5 className="font-bold text-center md-t:text-left text-base lg:text-lg ">{props.fhead}</h5>
            <div className="flex justify-evenly flex-col h-24  lg:h-28 my-3">
                <p className="text-xxs lg:text-xs  text-center md-t:text-left">{props.ftext1}</p>
                <p className="text-xxs lg:text-xs text-center  md-t:text-left">{props.ftext2}</p>
                <p className="text-xxs lg:text-xs text-center md-t:text-left  ">{props.ftext3}</p>
                <p className="text-xxs lg:text-xs  text-center md-t:text-left">{props.ftext4}</p>
            </div>
        </div>
    );
};

export default FooterComp;
