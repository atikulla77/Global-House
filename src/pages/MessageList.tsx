import { IoSearch } from "react-icons/io5";
import { IoGitPullRequest } from "react-icons/io5";
import presonlogo from "../assets/person-img.jpg";
import { useState } from "react";
import Chatting from "./Chatting";

function MessagesList() {
  const [showChatting, setShowChatting] = useState(false);
  const MessagesData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];

  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 bottom-0 overflow-hidden pt-[5rem] flex justify-start flex-wrap bg-[#1F2022] text-white">
      <div className="w-full h-full relative">
        <div className="absolute top-0 left-0 overflow-y-auto z-[50] [@media(min-width:800px)]:!w-[400px] screens1:!w-[350px] w-full h-full screens1:pl-[4rem] pl-0 screens1:pb-0 pb-[4rem] text-left screens1:border-r-[1.5px] border-r-0 border-r-[#2f2f2f] scrollbar-hide">
          <div className="w-full flex items-center px-[1rem] screens1:pt-[1rem] pt-0">
            <label className="relative w-[100%]">
              <input
                type="text"
                autoComplete="off"
                required
                placeholder="Rooms, Friends, And More"
                className="border-[2px] border-[#35363a] text-white text-[12px] rounded-[25px] focus:ring-[#35363a] focus:border-[#35363a] block w-full py-[9px] pl-[40px] pr-[15px] dark:!bg-[#2A2B30] dark:border-[#35363a] placeholder-[#pffffff9c] dark:focus:ring-[#35363a] dark:focus:border-[#35363a] font-[500] outline-none"
              />
              <IoSearch className="absolute left-[16px] top-[30%] text-[17px] text-[#ababab]" />
            </label>
            <div className="w-[30px] flex justify-center ml-[0.5rem] cursor-pointer">
              <IoGitPullRequest className="text-[18px] text-[#d7d7d7]" />
            </div>
          </div>
          <div className="w-[100%] flex flex-col justify-start pt-[1.4rem] PoppinsFont">
            <div className="flex items-center mx-[20px]">
              {/* status */}
              <div className="text-center mr-[15px]">
                <div className="w-[52px] h-[52px] relative">
                  <img
                    src={presonlogo}
                    className="w-[100%] h-[100%] rounded-[50%] "
                  />
                  {/* Active */}
                  <div className=" absolute right-[-1px] bottom-[0px] bg-[#3ac51a] rounded-[25px] border-[2px] w-[12px] h-[12px] border-[#1F2022] overflow-hidden"></div>
                </div>
                <p className="text-[12px] font-[400] text-[#d7d7d7]  pt-[4px]">
                  Md
                </p>
              </div>
              <div className="text-center mr-[15px]">
                <div className="w-[52px] h-[52px] relative">
                  <img
                    src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
                    className="w-[100%] h-[100%] rounded-[50%] "
                  />
                  {/* Active */}
                  <div className=" absolute right-[-1px] bottom-[0px] bg-[#3ac51a] rounded-[25px] border-[2px] w-[12px] h-[12px] border-[#1F2022] overflow-hidden"></div>
                </div>
                <p className="text-[12px] font-[400] text-[#d7d7d7]  pt-[4px]">
                  Alex
                </p>
              </div>
            </div>
            <div className="w-full  flex flex-col justify-start pt-[10px]">
              {/* message list */}
              {MessagesData.map((key) => {
                return (
                  <div
                    onClick={() => {
                      setShowChatting(true);
                    }}
                    key={key.id}
                    className="flex items-center py-[10px] px-[20px] hover:bg-[#2e2f32f0] transition-[0.2s] cursor-pointer"
                  >
                    <div className="w-[55px] h-[55px] relative">
                      <img
                        src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
                        className="w-[100%] h-[100%] rounded-[45%] "
                      />
                      {/* ofline */}
                      <div className="hidden absolute right-[-4px] bottom-[-1px] bg-[#1F2022] rounded-[25px] border-[2px] border-[#1F2022] overflow-hidden">
                        <div className="relative w-full h-full px-[6px] py-[1px] bg-[#21ba231f] ">
                          <p className="text-[9px] font-[400] text-[#21ba24]">
                            3d
                          </p>
                        </div>
                      </div>
                      {/* Active */}
                      <div className=" absolute right-[-1px] bottom-[0px] bg-[#3ac51a] rounded-[25px] border-[2px] w-[14px] h-[14px] border-[#1F2022] overflow-hidden"></div>
                    </div>
                    <div className="ml-[1.2rem]">
                      <div className="flex items-center pb-[3px]">
                        <h1 className="text-[15px] text-[#f0f0f0] font-[500]  pr-[10px]">
                          Alex Dev
                        </h1>
                        <p className="text-[12px] text-[#a9a9a9c0] font-[400]">
                          11:33 PM
                        </p>
                      </div>
                      <p className="text-[12px] text-[#d3d3d3db] font-[400] ">
                        hello
                      </p>
                    </div>
                  </div>
                );
              })}
              <div
                onClick={() => {
                  setShowChatting(true);
                }}
                className="flex items-center py-[10px] px-[20px] hover:bg-[#2e2f32f0] transition-[0.2s] cursor-pointer"
              >
                <div className="w-[55px] h-[55px] relative">
                  <img
                    src={presonlogo}
                    className="w-[100%] h-[100%] rounded-[45%] "
                  />
                  {/* ofline */}
                  <div className="hidden absolute right-[-4px] bottom-[-1px] bg-[#1F2022] rounded-[25px] border-[2px] border-[#1F2022] overflow-hidden">
                    <div className="relative w-full h-full px-[6px] py-[1px] bg-[#21ba231f] ">
                      <p className="text-[9px] font-[400] text-[#21ba24]">3d</p>
                    </div>
                  </div>
                  {/* Active */}
                  <div className=" absolute right-[-1px] bottom-[0px] bg-[#3ac51a] rounded-[25px] border-[2px] w-[14px] h-[14px] border-[#1F2022] overflow-hidden"></div>
                </div>
                <div className="ml-[1.2rem]">
                  <div className="flex items-center pb-[3px]">
                    <h1 className="text-[15px] text-[#f0f0f0] font-[500]  pr-[10px]">
                      Md Atikulla
                    </h1>
                    <p className="text-[12px] text-[#a9a9a9c0] font-[400]">
                      1d ago
                    </p>
                  </div>
                  <p className="text-[12px] text-[#d3d3d3db] font-[400] ">
                    hlw
                  </p>
                </div>
              </div>
              <div
                onClick={() => {
                  setShowChatting(true);
                }}
                className="flex items-center py-[10px] px-[20px] hover:bg-[#2e2f32f0] transition-[0.2s] cursor-pointer"
              >
                <div className="w-[55px] h-[55px] relative">
                  <img
                    src="https://as1.ftcdn.net/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg"
                    className="w-[100%] h-[100%] rounded-[45%] "
                  />
                  {/* ofline */}
                  <div className=" absolute right-[-4px] bottom-[-1px] bg-[#1F2022] rounded-[25px] border-[2px] border-[#1F2022] overflow-hidden">
                    <div className="relative w-full h-full px-[6px] py-[1px] bg-[#21ba231f] ">
                      <p className="text-[9px] font-[400] text-[#21ba24]">3d</p>
                    </div>
                  </div>
                  {/* Active */}
                  <div className="hidden absolute right-[-1px] bottom-[0px] bg-[#3ac51a] rounded-[25px] border-[2px] w-[14px] h-[14px] border-[#1F2022] overflow-hidden"></div>
                </div>
                <div className="ml-[1.2rem]">
                  <div className="flex items-center pb-[3px]">
                    <h1 className="text-[15px] text-[#f0f0f0] font-[500]  pr-[10px]">
                      Md Rohan
                    </h1>
                    <p className="text-[12px] text-[#a9a9a9c0] font-[400]">
                      3d ago
                    </p>
                  </div>
                  <p className="text-[12px] text-[#d3d3d3db] font-[400] ">hi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatting showChatting={showChatting} setShowChatting={setShowChatting} />
    </div>
  );
}

export default MessagesList;
