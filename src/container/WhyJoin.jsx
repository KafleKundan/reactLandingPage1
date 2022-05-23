import React from "react";
import IMAGES from "../static";
import InfoSecComp from "../components/InfoSecComp";

const WhyJoin = () => {
    return (
        <div className=" h-full w-full lg:w-4/5 mx-auto  flex items-center justify-center md-t:flex-row flex-col-reverse my-2">
            <section className=" md-t:mx-0  w-full  inline-block md-t:px-6 px-5 ">
                <InfoSecComp
                    topBtnCss=""
                    topBtnText="What is Netbook?"
                    headingTxt="Why Join to Netbook Social Network?"
                    headingCss="text-3xl"
                    paraCss=""
                    paraTxt="Recent surveys have indicated that small businesses
                        recognise the need they have to connect with consumer."
                />
                <div className="flex mt-2 ml-5">
                    <ul className="list-disc ">
                        <li className="text-blue-600">
                            <span className="text-gray-600 font-semibold">
                                Groups
                            </span>
                        </li>
                        <li className="text-blue-600">
                            <span className="text-gray-600 font-semibold">
                                Messages
                            </span>
                        </li>
                        <li className="text-blue-600">
                            <span className="text-gray-600 font-semibold">
                                Share
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="w-full px-4 flex flex-row-reverse items-center justify-center md-t:items-center md-t:justify-start md-t:pr-5 md-t:pl-1 my-5">
                <div className="twoimg d-flex flex-column space-y-8  ">
                    <img
                        src={IMAGES.whyjointwoimg1}
                        alt=""
                        className=" rounded-2xl w-40 md-t:80"
                    />
                    <img
                        src={IMAGES.whyjointwoimg2}
                        alt=""
                        className="rounded-2xl w-40 md-t:80"
                    />
                </div>
                <div className="singleimg flex-column items-center justify-center md-t:mr-9 mr-6 ">
                    <img
                        src={IMAGES.whyjoinsingleimg}
                        alt=""
                        className="rounded-b-lg w-40 md-t:80"
                    />
                </div>
            </section>
        </div>
    );
};

export default WhyJoin;
