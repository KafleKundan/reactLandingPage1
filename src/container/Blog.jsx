import React from "react";
import { ArrowForwardCircleOutline, HandRight } from "react-ionicons";
import BlogCard from "../components/BlogCard";
import InfoSecComp from "../components/InfoSecComp";
import IMAGES from "../static";

const Blog = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center flex-col">
                <InfoSecComp
                    topBtnText="Get Our Application"
                    headingTxt="Latest News"
                    headingCss="text-3xl"
                />
            </div>
            <div className="flex w-80p items-center relative justify-center">
                <div className=" flex justify-start overflow-x-scroll  scrollbar-hide relative xl:justify-center">
                    <BlogCard blogTitle="It Does Not Matter How Slow You're Moving... " blogImg={IMAGES.blog1} />
                    <BlogCard blogTitle="Netbook Network Added New Photo Filter..." blogImg={IMAGES.blog2} />
                    <BlogCard blogTitle="We Optimised Netbooks Better Navigation..." blogImg={IMAGES.blog3} />
                    <BlogCard blogTitle="How 2FA Can Help You From Getting Hacked" blogImg={IMAGES.blog4} />
                    <BlogCard blogTitle="It Does Not Matter How Slow You're Moving... " blogImg={IMAGES.blog1} />
                </div>
                <div className="scrollbtn absolute top-1/3 left-0 bg-white rounded-full animate-bounce xl:hidden h-fit">
                    <ArrowForwardCircleOutline
                        color="black"
                        width="40px"
                        height="40px"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
