import React from "react";
import ActiveMembersCard from "../components/ActiveMembersCard";
import InfoSecComp from "../components/InfoSecComp";
import IMAGES from "../static"


const ActiveMembers = () => {
    return (
        <div className=" hidden md-t:flex  h-full  lg:w-4/5 mx-auto  items-center  justify-center   flex-col my-3  lg:px-3 w-full sm:px-12  py-3 px-3">
            <div className="flex justify-center items-center flex-col px-2">
                <InfoSecComp
                    topBtnText="Valuable Team"
                    headingTxt="Our Active Members"
                    headingCss="text-center text-xl"
                    paraTxt="When an unknown printer took a gallery of type and meeting fari scrambled it."
                    paraCss="text-sm text-gray-600 text-center"
                />
            </div>
            <div className="md-t:w-2/4 w-72  bg-blue-200 flex items-center rounded-2xl">
                <div className="w-1/3 cursor-pointer "><h5 className="text-normal text-center bg-transparent text-sm m-0 px-3 py-3 rounded-2xl">Newest</h5></div>
                <div className="w-1/3 cursor-pointer"><h5 className="text-normal text-center bg-transparent text-sm m-0 px-3 py-3 rounded-2xl">Popular</h5></div>
                <div className="w-1/3 cursor-pointer"><h5 className="text-normal text-center bg-blue-700 text-sm m-0 px-3 py-3 rounded-2xl text-white">Active</h5></div>
            </div>
            <div className="flex flex-row items-center justify-center w-full flex-wrap my-8">
                <ActiveMembersCard
                staffPhoto={IMAGES.staff1}
                staffName = "Fahim Rahman"
                staffId= "@rahman"
                />
                <ActiveMembersCard
                staffPhoto={IMAGES.staff2}
                staffName = "Kazi Rahman"
                staffId= "@Rahman"
                />
                <ActiveMembersCard
                staffPhoto={IMAGES.staff3}
                staffName = "Masterero Ali"
                staffId= "@Master"
                />
                <ActiveMembersCard
                staffPhoto={IMAGES.staff4}
                staffName = "Alia Karon"
                staffId= "@Alia"
                />
            </div>
        </div>
    );
};

export default ActiveMembers;
