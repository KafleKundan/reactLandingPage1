import React from "react";

const FeaturesComp = (props) => {
    return (
        <div className={`${props.FeatureCompCss} flex flex-row shadow-2xl rounded-2xl p-3 my-4 bg-white`}>
            <div className="left mr-3">
                <div className={`${props.FeaturesIconImageCss}`}>
                    {props.FeaturesIconImage}
                </div>
            </div>

            <div className="right">
                <h4 className={`${props.FeaturesSecHeadCss}`}>
                    {props.FeaturesSecHead}
                </h4>
                <p className={`${props.FeaturesSecParaCss}`}>
                    {props.FeaturesSecPara}
                </p>
            </div>
        </div>
    );
};

export default FeaturesComp;
