import makeFriend from "../assets/makeFriend.png";
import { HiMiniSignal } from "react-icons/hi2";

function MakeFriend() {
  return (
    <div className="w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 overflow-y-auto pt-[5rem] pb-[4rem] screens1:pl-[70px] pl-0 flex justify-center flex-wrap bg-[#1F2022] text-white scrollbar-hide">
      <div className="w-full mx-[1rem] ">
        <p className="text-left text-[13px] font-[500] PoppinsFont">
          add interesting people
          <br /> to bring your hallway to life <span className="">💃🎉</span>
        </p>
        <div className="w-[100%] px-[1rem] mt-[4rem] flex flex-col justify-center items-center text-center">
          <img
            src={makeFriend}
            className="[@media(min-width:400px)]:w-[150px] w-[130px]"
            alt=""
          />
          <h1 className="text-[20px] font-[600] PoppinsFont pt-[1.3rem] pb-[8px]">
            uh oh!
          </h1>
          <p className="[@media(min-width:400px)]:text-[14px] text-[13px] font-[500] text-[#ababab] PoppinsFont pb-[0.5rem]">
            no friend suggestions at this time.
          </p>
          <p className="[@media(min-width:400px)]:text-[14px] text-[13px] font-[500] text-[#ababab] PoppinsFont pb-[1rem]">
            try starting a room and adding <br /> friends.
          </p>
          <button className="flex items-center font-[500] text-[12px] screens1:px-[21px] px-[18px] screens1:py-[9px] py-[8px] rounded-[25px] bg-[#0C8BFD] text-white">
            <HiMiniSignal className="text-[16px] mr-[5px]" />
            <p className="PoppinsFont">start a room</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakeFriend;
