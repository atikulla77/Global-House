import findFriend from "../assets/FindFriend.png";
import { IoSearch } from "react-icons/io5";
import { HiMiniSignal } from "react-icons/hi2";

function FindFriend() {
  return (
    <div className="w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 overflow-y-auto pt-[5rem] pb-[4rem] flex justify-center flex-wrap bg-[#1F2022] text-white scrollbar-hide">
      <div className="[@media(min-width:400px)]:w-[400px] w-full mx-[1rem] text-left">
        <label className="relative">
          <input
            type="text"
            autoComplete="off"
            required
            placeholder="Rooms, Friends, And More"
            className="border-[2px] border-[#35363a] text-white text-[13px] rounded-[25px] focus:ring-[#35363a] focus:border-[#35363a] block w-full py-2.5 pl-[40px] pr-[15px] dark:!bg-[#2A2B30] dark:border-[#35363a] placeholder-[#pffffff9c] dark:focus:ring-[#35363a] dark:focus:border-[#35363a] font-[500] outline-none"
          />
          <IoSearch className="absolute left-[16px] top-[30%] text-[17px] text-[#ababab]" />
        </label>

        <div className="w-[100%] px-[1rem] [@media(min-width:400px)]:py-[2.5rem] py-[1.5rem] mt-[1.5rem] flex flex-col justify-center items-center text-center border-[2px] border-[#35363a] rounded-[18px]">
          <img src={findFriend} className="[@media(min-width:400px)]:w-[150px] w-[130px]" alt="" />
          <h2 className="[@media(min-width:400px)]:text-[14px] text-[13px] font-[500] text-[#ababab] PoppinsFont pt-[1rem] pb-[0.7rem]">
            to see updates, start a room and add<br/> friend
          </h2>
          <button className="flex items-center font-[500] text-[12px] px-[17px] py-[7px] rounded-[25px] bg-[#0C8BFD] text-white">
          <HiMiniSignal className="text-[16px] mr-[5px]" />
            <p className="PoppinsFont">start a room</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindFriend;
