import React from "react";
import FooterComp from "../components/FooterComp";
import InfoSecComp from "../components/InfoSecComp";
import IMAGES from "../static";
import {
    LogoTwitter,
    LogoInstagram,
    LogoFacebook,
    LogoLinkedin,
} from "react-ionicons";

const Footer = () => {
    console.clear();
    return (
        <>
            <div className="flex items-center justify-center pt-10 pb-5 bg-slate-800">
                <div className="md-t:w-80p w-full  flex flex-wrap  items-start justify-evenly text-zinc-300">
                    <FooterComp
                        fhead="Home"
                        ftext1="Home"
                        ftext2="Community"
                        ftext3="Events"
                        ftext4="Contact"
                    />
                    <FooterComp
                        fhead="Resources"
                        ftext1="Blog"
                        ftext2="News"
                        ftext3="Guides"
                        ftext4="Help Center"
                    />
                    <FooterComp
                        fhead="Community"
                        ftext1="News Feed"
                        ftext2="Profile"
                        ftext3="Friends"
                        ftext4="Forums"
                    />
                    <FooterComp
                        fhead="Main Links"
                        ftext1="Members"
                        ftext2="Activity"
                        ftext3="Groups"
                        ftext4="Private Group"
                    />
                    <div className="md-t:w-72 w-48 h-full">
                        <InfoSecComp
                            topBtnCss="hidden"
                            headingTxt="Subscribe Cirkle NewsLetter"
                            headingCss="md-t:text-lg text-base text-center mb-1 mt-0"
                            paraTxt="Subscribe to be the first one to know about updates. Enter your email"
                            paraCss="md-t:text-sm text-xxs text-center mb-1.5"
                        />
                        <div className="border-2 border-zinc-300 rounded-3xl flex flex-row justify-between items-center ">
                            <input
                                type="text"
                                className="w-2/3 bg-transparent rounded-2xl h-full focus:outline-0 px-4 py-2 md-t:placeholder:text-xs md-t:text-xs text-xxs"
                                placeholder="Email Address"
                            />
                            <button className="w-1/3 m-1 py-1  md-t:px-4 px-2 rounded-2xl md-t:text-xs text-xxs  border-double border-2 bg-neutral-800 text-zinc-500">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-row py-3 px-5 justify-between md-t:justify-evenly items-center bg-slate-900
            text-zinc-400"
            >
                <div>
                    <p className="text-xxs">&#169;Bonk Creative Agency</p>
                </div>
                <div className="w-20 hidden md:block">
                    <img src={IMAGES.logo2} alt="" />
                </div>
                <div className="flex flex-row">
                    <div className="p-1 bg-white rounded-full mx-0.5  cursor-pointer">
                        
                        <LogoTwitter width="20px" />
                    </div>
                    <div className="p-1 bg-white rounded-full mx-0.5 cursor-pointer">
                        <LogoInstagram width="20px"/>
                    </div>
                    <div className="p-1 bg-white rounded-full mx-0.5 cursor-pointer">
                        <LogoFacebook width="20px"/>
                    </div>
                    <div  className="p-1 bg-white rounded-full mx-0.5 cursor-pointer">
                        <LogoLinkedin width="20px" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
