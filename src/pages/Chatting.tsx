import presonlogo from "../assets/person-img.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { HiPlusCircle } from "react-icons/hi";
import { MdOutlinePermMedia } from "react-icons/md";
import { AiOutlineCamera } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { MdOutlineKeyboardVoice } from "react-icons/md";

function Chatting({ showChatting, setShowChatting }: any) {
  const [leftActionButton, setLeftActionButton] = useState(false);
  const [hideChatting, sethideChatting] = useState(false);
  const pageAnimationTopBarTimeOut = () => {
    sethideChatting(true);
    setTimeout(() => {
      sethideChatting(false);
    }, 200);
  };
  // To Hide Action Butoon Tools
  const [hideActionButton, sethideActionButton] = useState(false);
  const hideActionButtonAnimation = () => {
    sethideActionButton(true);
    setTimeout(() => {
      sethideActionButton(false);
    }, 195);
  };

  return (
    <div
      className={` ${
        showChatting
          ? `screens1:flex ${
              showChatting ? "flex" : "hidden"
            } siteMainChattingAnimationLeft`
          : `${
              hideChatting
                ? "siteMainChattingAnimationRight"
                : "screens1:flex hidden"
            }`
      } justify-center w-[100%] h-[100vh] absolute top-0 bottom-0 overflow-y-auto screens1:pt-[4.7rem] pt-0 [@media(min-width:800px)]:!pl-[400px] screens1:pl-[350px] pl-0 scrollbar-hide screens1:z-[40] z-[60] text-white`}
    >
      <div className="w-full h-[100%] flex relative screens1:pt-[4rem] pt-0  bg-[#1F2022]">
        {/* Top Area */}
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-[4rem] px-[1rem] shadow-[0px_0px_8px_0px_#00000021] z-[10] text-[#ededed] bg-[#1F2022]">
          <div className="flex items-center">
            <FaArrowLeft
              onClick={() => {
                setShowChatting(false);
                pageAnimationTopBarTimeOut();
              }}
              className="text-[17px] cursor-pointer screens1:hidden flex"
            />

            <div className=" flex items-center screens1:px-0 pl-[15px]">
              <div className="w-[30px] h-[30px] relative mr-[0.5rem]">
                <img
                  src={presonlogo}
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
                <div className=" absolute right-[-1px] bottom-[0px] bg-[#3ac51a] rounded-[25px] border-[2px] w-[11px] h-[11px] border-[#1F2022] overflow-hidden"></div>
              </div>
              <h1 className="text-[13.5px] font-[500] PoppinsFont">
                Md Atikulla
              </h1>
            </div>
          </div>
          <div className="flex items-center ">
            <FaPhone className="text-[15px] mr-[18px]" />
            <IoIosVideocam className="text-[21px]" />
          </div>
        </div>
        {/* Messages Area */}
        <div className="w-full h-full absolute left-0 top-0 overflow-y-auto text-white z-0 bg-[#1F2022] pt-[4rem] pb-[62px]">
          <div className="w-full h-full relative">
            <div className="w-full h-full flex flex-col-reverse items-end absolute left-0 top-0 [@media(min-width:500px)]:px-[20px] px-[15px] pb-[10px] overflow-y-auto MessagesAreaScrollBar">
              {/* ----My Message---- */}
              <div className="w-full flex items-center justify-end py-[3px]">
                <div className="w-[60%] flex flex-col justify-end text-right PoppinsFont">
                  <div className="w-full flex justify-end">
                    <p className="w-fit bg-[#1997ff] text-[13px] font-[400] px-[10px] py-[5px] rounded-[15px]">
                      Hello Boydddddddd
                    </p>
                  </div>
                  <span className="[@media(min-width:500px)]:text-[11px] text-[10px] font-[500] text-[#d0d0d0] pt-[2px]">
                    Sent
                  </span>
                  {/* <span className="[@media(min-width:500px)]:text-[11px] text-[10px] font-[500] text-[#d0d0d0] pt-[2px]">Delivered</span> */}
                </div>
              </div>
              {/* ----Friend Message---- */}
              <div className="w-full flex items-center justify-start py-[3px]">
                <div className="mr-[9px] h-full flex items-end">
                  <img src={presonlogo} className="w-[29px] rounded-[50%]" />
                </div>
                <div className="w-[60%] flex justify-start">
                  <p className="w-fit bg-[#1997ff] text-[13px] font-[400] px-[10px] py-[5px] rounded-[15px] PoppinsFont">
                    Hello.
                  </p>
                </div>
              </div>
              {/* ----Protfolio---- */}
              <div className="w-full flex flex-col justify-center text-center py-[3rem]">
                <img src={presonlogo} className="w-[110px] rounded-[50%] mx-auto" />
                <h1 className="text-[18px] font-[500] PoppinsFont pt-[10px]">
                  Md Atikulla
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Text Area */}
        <div className="absolute bottom-0 left-0 flex items-center justify-between w-full px-[1rem] py-[0.8rem] shadow-[0px_0px_8px_0px_#00000021] z-[10] text-[#ededed] bg-[#1F2022]">
          <div className="w-full flex items-center ">
            <HiPlusCircle
              onClick={() => {
                setLeftActionButton(true);
              }}
              className="text-[26px] text-[#d7d7d7] mr-[0.5rem] cursor-pointer"
            />
            <MdOutlineKeyboardVoice className="text-[26px] text-[#d7d7d7] mr-[0.5rem] cursor-pointer" />
            <label className="relative w-[100%]">
              <input
                type="text"
                placeholder="Aa"
                className=" text-white text-[12px] rounded-[25px] block w-full py-[9px] pl-[15px] pr-[15px] dark:!bg-[#2A2B30] placeholder-[#pffffff9c] font-[500] outline-none"
              />
            </label>
            <IoSend className="text-[20px] text-[#d7d7d7] ml-[0.5rem]" />
          </div>
        </div>
        {/* Action Button Area */}
        <div
          className={`${
            leftActionButton
              ? "flex ChattingActionButtonToolsShowAnimation"
              : `${
                  hideActionButton
                    ? "ChattingActionButtonToolsHideAnimation"
                    : "hidden"
                }`
          } absolute bottom-0 left-0 w-full h-[100%] bg-transparent flex-col items-end z-[70] `}
        >
          <div
            onClick={() => {
              setLeftActionButton(false);
              hideActionButtonAnimation();
            }}
            className="w-full h-full"
          ></div>
          <div className="w-full flex flex-col items-center text-[#ededed] bg-[#1F2022] shadow-[0px_0px_8px_0px_#0000004f] px-[1.5rem] ">
            <div
              onClick={() => {
                setLeftActionButton(false);
                hideActionButtonAnimation();
              }}
              className="flex justify-center items-center w-full py-[8px]"
            >
              <div className="w-[2.5rem] h-[4px] rounded-[25px] bg-[#4d4e54] cursor-pointer"></div>
            </div>
            <div className="w-full flex flex-col items-center justify-start pb-[0.5rem]">
              {/* Take Photo */}
              <div className="w-full flex items-center pb-[0.5rem] pt-[0.5rem] border-b-[1px] border-b-[#26272a]">
                <div className="w-[36px] h-[36px] rounded-[8px] bg-[#4d4e548f] flex items-center justify-center">
                  <AiOutlineCamera className="text-[18px] text-[#ffffff9a]" />
                </div>
                <p className="text-[12px] text-[#ffffffc4] PoppinsFont pl-[10px]">
                  Take Photo
                </p>
              </div>
              {/* Choose From Gallery */}
              <div className="w-full flex items-center pb-[0.5rem] pt-[0.5rem] border-b-[1px] border-b-[#26272a]">
                <div className="w-[36px] h-[36px] rounded-[8px] bg-[#4d4e548f] flex items-center justify-center">
                  <MdOutlinePermMedia className="text-[17px] text-[#ffffff9a]" />
                </div>
                <p className="text-[12px] text-[#ffffffc4] PoppinsFont pl-[10px]">
                  Choose From Gallery
                </p>
              </div>
              {/* Choose From Gallery */}
              <div className="w-full flex items-center pb-[0.5rem] pt-[0.5rem]">
                <div className="w-[36px] h-[36px] rounded-[8px] bg-[#4d4e548f] flex items-center justify-center">
                  <FiLink className="text-[17px] text-[#ffffff9a]" />
                </div>
                <p className="text-[12px] text-[#ffffffc4] PoppinsFont pl-[10px]">
                  Add Link
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatting;
