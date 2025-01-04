import { IoShareSocialSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import presonlogo from "../assets/person-img.jpg";
import { useState } from "react";

function PortfolioInfo({showPortfolioInfo, setshowPortfolioInfo}:any) {
      // To Hide Action Butoon Tools
      const [hidePortfolio, sethidePortfolio] = useState(false);
      const hidePortfolioAnimation = () => {
        sethidePortfolio(true);
        setTimeout(() => {
          sethidePortfolio(false);
        }, 195);
      };
  return (
    <div className={`w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 overflow-y-auto  justify-center bg-[#1F2022] scrollbar-hide z-[60] text-white ${
      showPortfolioInfo
          ? `flex ChattingActionButtonToolsShowAnimation`
          : `${
            hidePortfolio
                ? "ChattingActionButtonToolsHideAnimation"
                : "hidden"
            }`
      } `}>
      <div className="w-full px-[1rem] py-[2rem] relative">
        <div onClick={() => {setshowPortfolioInfo(false); hidePortfolioAnimation()}} className="absolute left-0 top-[8px] flex justify-center items-center w-full">
          <div className="w-[2.5rem] h-[5px] rounded-[25px] bg-[#4d4e54] cursor-pointer"></div>
        </div>
        <div className="flex items-center">
          <img
            src={presonlogo}
            className="w-[95px] h-[95px] rounded-[40%] mr-[1.5rem]"
          />
          <div className="">
            <h1 className="text-[17px] font-[600] MontserratFont">
              MD ATIKULLA
            </h1>
            <p className="text-[12px] text-[#d3d3d3] font-[400] PoppinsFont">
              @atikulla
            </p>

            <p className="text-[18px] font-[500] pt-[7px] RalewayFont">1</p>
            <p className="text-[11px] text-[#d3d3d3] font-[400] MontserratFont">
              friends
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full pt-[30px]">
          <div className="w-[47%] text-[11px] flex justify-center items-center font-[600] bg-[#2A2B30] text-center py-[10px] rounded-[25px]">
            <IoShareSocialSharp className="text-[13px] mr-[8px]" />
            <p className="tracking-[0.7px]">Share</p>
          </div>
          <div className="w-[47%] text-[11px] flex justify-center items-center font-[600] bg-[#2A2B30] text-center py-[10px] rounded-[25px]">
            <IoSettingsOutline className="text-[13px] mr-[8px]" />
            <p className="tracking-[0.7px]">Settings</p>
          </div>
        </div>
        <div className="w-full mt-[1.6rem]">
          <div className="flex items-center">
            <FaInstagram className="text-[16px] mr-[10px]" />
            <a className="text-[13px] font-[600] underline">add instagram</a>
          </div>
          <div className="flex items-center pt-[20px]">
            <FaPlus className="text-[16px] mr-[10px]" />
            <a className="text-[13px] font-[600] underline">add bio</a>
          </div>
          <div className=" pt-[1.5rem]">
            <p className="text-[12px] text-[#a8a8a8] font-[500] pb-[0.7rem] PoppinsFont">
              recently chatting with
            </p>
            <img src={presonlogo} className="w-[87px] h-[87px] rounded-[36%]" />
          </div>
          <div className=" pt-[1.5rem]">
            <p className="text-[12px] text-[#a8a8a8] font-[500] pb-[0.7rem] PoppinsFont">
              houses
            </p>
            <div className="w-[87px] text-center cursor-pointer">
              <div className="w-[87px] h-[87px] rounded-[30%] bg-[#2A2B30] flex justify-center items-center">
                <FaPlus className="text-[25px] text-[#cdcdcd]" />
              </div>
              <p className="text-[12px] text-[#c5c5c5] font-[400] pt-[0.2rem] PoppinsFont">
                new house
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioInfo;
