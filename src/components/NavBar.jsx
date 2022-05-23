import React, { useState, useEffect } from "react";
import IMAGES from "../static";
import { ReorderThreeOutline } from "react-ionicons";
import CoupleButtons from "./CoupleButtons";

const NavBar = () => {
    // initiating states
    const [ham, setHam] = useState(false);
    const [isHamClicked, setIsHamClicked] = useState(false);

    //Initiating Screen Dimensions
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });
    //Screen Dimensions Finder
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        });
    };
    //Runs Screen Dimension Finder On Change
    useEffect(() => {
        window.addEventListener("resize", detectSize);
        window.addEventListener("load", detectSize);

        // For Hamburger
        if (windowDimenion.winWidth < 700) {
            setHam(true);
        } else {
            setHam(false);
        }

        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowDimenion]);

    const nav = {
        items: [
            {
                component: "Home",
                href: "/",
                active: true,
            },
            {
                component: "Community",
                href: "/",
                active: false,
            },
            {
                component: "Blog",
                href: "/",
                active: false,
            },
            {
                component: "Events",
                href: "/",
                active: false,
            },
        ],
    };
    const navcomponents = nav.items.map((component, index) => {
        let comp = (
            <a
                className={`text-sm text-gray-600 hover:bg-indigo-300 hover:text-black rounded-lg px-2 py-1 no-underline ${
                    component.active ? "bg-indigo-500 text-white" : ""
                }`}
                key={index}
                href={component.href}
            >
                {component.component}
            </a>
        );
        return comp;
    });
    const hammenu = () => {
        setIsHamClicked(!isHamClicked);
    };

    return (
        <>
            <nav className="fixed top-0 w-full bg-blue-100 z-40">
                <div className="NavBar px-2 m-w-7xl flex lg:justify-evenly items-center py-3 md:m-w-full justify-between relative fixed top-0">
                    <div className="logo">
                        <img src={IMAGES.logo} alt="Logo" className="h-auto w-18" />
                    </div>
                    {ham ? (
                        <ReorderThreeOutline
                            width={"50px"}
                            height={"30px"}
                            className="cursor-pointer"
                            onClick={hammenu}
                        />
                    ) : (
                        <>
                            <div className="d-flex items-center m-0 p-0 space-x-4">
                                {navcomponents}
                            </div>
                            <div>
                                <CoupleButtons
                                    lightBtn="Get Started"
                                    darkBtnCss=" text-sm px-4 py-2"
                                    lightBtnCss=" text-sm "
                                    darkBtn="Login"
                                />
                            </div>
                        </>
                    )}
                    {isHamClicked ? (
                        <>
                            <div className="absolute py-1 px-1  bg-indigo-200 top-9 right-3 w-40 h-auto  flex-column items-center rounded-lg">
                                {nav.items.map((component, index) => {
                                    let comp = (
                                        <a
                                            className={`text-sm block text-gray-600 hover:bg-indigo-300 hover:text-black rounded-lg px-2 py-1 no-underline }`}
                                            key={index}
                                            href={component.href}
                                        >
                                            {component.component}
                                        </a>
                                    );
                                    return comp;
                                })}
                            </div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </nav>
        </>
    );
};

export default NavBar;
