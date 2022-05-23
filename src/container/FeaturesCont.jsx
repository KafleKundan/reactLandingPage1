import React from "react";
import FeaturesComp from "../components/FeaturesComp";
import InfoSecComp from "../components/InfoSecComp";
import {
    PeopleOutline,
    PeopleCircleOutline,
    ChatbubbleOutline,
    ContractOutline,
    NewspaperOutline,
    ListOutline,
} from "react-ionicons";


const FeaturesCont = () => {
    return (
        <div className="h-full w-4/5 lg:w-4/5 mx-auto flex items-center  justify-center md-t:flex-row flex-col my-3 flex-wrap lg:px-3 sm:px-12  py-3 px-3">
            <div className="FeaturesHeading flex justify-center items-center">
                <div className="flex justify-center items-center flex-col px-2">
                    <InfoSecComp
                        topBtnText="Our Community"
                        headingTxt="Community Main Feature"
                        headingCss="text-center text-xl"
                        paraTxt="The wise man therefore always holds in these matters to this principle of selection."
                        paraCss="text-sm text-gray-600 text-center"
                    />
                </div>
            </div>
            <div className="FeaturesSection flex flex-wrap items-center justify-between">
                <FeaturesComp
                    FeaturesIconImage={
                        <PeopleOutline
                            width="40px"
                            height="40px"
                            color="white"
                        />
                    }
                    FeaturesSecHead="Members,Friends"
                    FeaturesSecPara="Members,Friends Connection ( like followers), Private Message"
                    FeatureCompCss="w-full md-t:w-40p lg:w-30p"
                    FeaturesIconImageCss="bg-blue-400 rounded-2xl p-1"
                    FeaturesSecHeadCss="md-t:text-lg text-sm  text-bold"
                    FeaturesSecParaCss="md-t:text-sm  text-xs  text-gray-600"
                />
                <FeaturesComp
                    FeaturesIconImage={
                        <PeopleCircleOutline
                            width="40px"
                            height="40px"
                            color="white"
                        />
                    }
                    FeaturesSecHead="Groups"
                    FeaturesSecPara="Your users can create groups to let other users to join and talk"
                    FeatureCompCss="w-full md-t:w-40p lg:w-30p"
                    FeaturesIconImageCss="bg-red-400 rounded-2xl p-1"
                    FeaturesSecHeadCss="md-t:text-lg text-sm  text-bold"
                    FeaturesSecParaCss="md-t:text-sm  text-xs  text-gray-600"
                />
                <FeaturesComp
                    FeaturesIconImage={
                        <ChatbubbleOutline
                            width="40px"
                            height="40px"
                            color="white"
                        />
                    }
                    FeaturesSecHead="Forum"
                    FeaturesSecPara="Forum is ready by BBPress. Your users can make topics and talk"
                    FeatureCompCss="w-full md-t:w-40p lg:w-30p"
                    FeaturesIconImageCss="bg-yellow-300 rounded-2xl p-1"
                    FeaturesSecHeadCss="md-t:text-lg text-sm  text-bold"
                    FeaturesSecParaCss="md-t:text-sm  text-xs  text-gray-600"
                />
                <FeaturesComp
                    FeaturesIconImage={
                        <ContractOutline
                            width="40px"
                            height="40px"
                            color="white"
                        />
                    }
                    FeaturesSecHead="Custom Module"
                    FeaturesSecPara="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."
                    FeatureCompCss="w-full md-t:w-40p lg:w-30p"
                    FeaturesIconImageCss="bg-blue-400 rounded-2xl p-1"
                    FeaturesSecHeadCss="md-t:text-lg text-sm text-bold"
                    FeaturesSecParaCss="md-t:text-sm  text-xs text-gray-600"
                />
                <FeaturesComp
                    FeaturesIconImage={
                        <ListOutline width="40px" height="40px" color="white" />
                    }
                    FeaturesSecHead="List Builder"
                    FeaturesSecPara="Members, Groups list can be modified by drag & drop live builder."
                    FeatureCompCss="w-full md-t:w-40p lg:w-30p"
                    FeaturesIconImageCss="bg-red-500 rounded-2xl p-1"
                    FeaturesSecHeadCss="md-t:text-lg text-sm  text-bold"
                    FeaturesSecParaCss="md-t:text-sm  text-xs  text-gray-600"
                />
                <FeaturesComp
                    FeaturesIconImage={
                        <NewspaperOutline
                            width="40px"
                            height="40px"
                            color="white"
                        />
                    }
                    FeaturesSecHead="List Scroll Effects"
                    FeaturesSecPara="8 different scroll effects are ready. You can always change by your tastes."
                    FeatureCompCss="w-full md-t:w-40p lg:w-30p"
                    FeaturesIconImageCss="bg-blue-400 rounded-2xl p-1"
                    FeaturesSecHeadCss="md-t:text-lg text-sm  text-bold"
                    FeaturesSecParaCss="md-t:text-sm  text-xs  text-gray-600"
                />
            </div>
        </div>
    );
};

export default FeaturesCont;
