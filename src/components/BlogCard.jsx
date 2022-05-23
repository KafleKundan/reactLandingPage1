import React from "react";


const BlogCard = (props) => {
    return (
        <div className="h-auto w-64 mx-5  flex flex-col items-center py-6">
            <div className="w-48 h-48 bg-blue-100 rounded-2xl">
            
                <img src={props.blogImg} alt=""  className="w-full h-full rounded-2xl"/>
            </div>
            <div className="flex w-90p">
                <div className="w-1/5 relative">
                    <div className="absolute w-5 h-1 top-5 right-2 bg-orange-200"></div>
                </div>
                <div className="w-3/4 my-2">
                    <h4 className="text-sm font-semibold">{props.blogTitle}</h4>
                    <button className="text-xs font-semibold text-blue-500">
                        Continue Reading &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
