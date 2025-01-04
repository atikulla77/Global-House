import { FaChevronDown } from "react-icons/fa";
import presonlogo from "../assets/person-img.jpg"
import { TbMessage } from "react-icons/tb";
import { useState } from "react";

function Activity({showActivity, setshowActivity}:any) {
    // To Hide Action Butoon Tools
    const [hideActivity, sethideActivity] = useState(false);
    const hideActivityAnimation = () => {
      sethideActivity(true);
      setTimeout(() => {
        sethideActivity(false);
      }, 195);
    };
  return (
    <div className={`w-[100%] h-[100vh] absolute bottom-0 left-0 overflow-y-auto justify-center bg-[#1F2022] scrollbar-hide z-[60] text-white ${
      showActivity
          ? `flex ChattingActionButtonToolsShowAnimation`
          : `${
            hideActivity
                ? "ChattingActionButtonToolsHideAnimation"
                : "hidden"
            }`
      } `}>
      <div className="w-full px-[1.5rem]">
        <div className="w-full text-center relative mt-[1.5rem]">
          <h1 className="text-[20px] font-[600]">Activity</h1>
          <FaChevronDown onClick={() => {setshowActivity(false); hideActivityAnimation();}} className="text-[19px] absolute left-[6px] top-[8px] cursor-pointer" />
        </div>

        <div className="pt-[2rem] w-full text-left ">
          <p className="text-[14px] font-[400]">
            <a className="font-[600]">Jillu Rahman Jibon</a> added you back! say
            hi in a VM? <span className="text-[#929292] pl-[4px]">3d ago</span>
          </p>
        </div>
        <div className="rounded-[10px] flex items-center justify-between bg-[#2A2B30] border-[2px] border-[#35363a] mt-[0.5rem] px-[10px] py-[8px]">
          <div className="flex items-center">
            <div className="w-[30px] h-[30px] rounded-[50%] mr-[15px]">
              <img
                src={presonlogo}
                className="w-[100%] h-[100%] object-cover rounded-[50%]"
              />
            </div>
            <a className="text-[13px] font-[600] ">Jillu Rahman Jibon</a>
          </div>
          <div className="w-[35px] h-[35px] rounded-[30%] bg-[#1F2022] flex items-center text-center justify-center">
            <TbMessage className="text-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
