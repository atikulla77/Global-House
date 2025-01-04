import { AiOutlineHome } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TbMessage2Plus } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

function NavberBottom() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="bg-[#1F2022] text-[#A2A9AF] screens1:w-[4rem] w-full screens1:h-[100vh] h-auto fixed bottom-0 left-0 flex z-50 screens1:border-r-[1.5px] border-r-0 border-r-[#2f2f2f]">
      <div className="mx-auto px-2 w-[100%] relative">
        {pathname !== "/messages" ? (
          <div className="screens1:relative absolute screens1:top-[105px] top-[-40px] left-0 w-full flex items-center justify-center text-center z-[1]">
            <div className="screens1:w-[43px] w-[55px] screens1:h-[43px] h-[55px] flex items-center justify-center text-center rounded-[50%] bg-[#0C8BFD] cursor-pointer">
              <FaPlus className="screens1:text-[18px] text-[20px] text-white" />
            </div>
          </div>
        ) : (
          <>
            <div className="relative top-[105px] left-0 w-full screens1:flex hidden items-center justify-center text-center z-[1]">
              <div className="w-[43px] h-[43px] flex items-center justify-center text-center rounded-[50%] bg-[#0C8BFD] cursor-pointer">
                <TbMessage2Plus className="text-[18px] text-white" />
              </div>
            </div>
            {/*<-\-------{|}-------/->*/}
            <div className="absolute top-[-80px] right-[20px] w-[47px] h-[47px] screens1:hidden flex items-center justify-center text-center rounded-[50%] bg-[#0C8BFD] z-[1]">
              <TbMessage2Plus className="text-[22px] text-white" />
            </div>
          </>
        )}

        <div className="w-[100%] h-[20px] absolute top-[-17px] left-0 right-0 screens1:hidden flex bg-gradient-to-t from-[#1F2022]"></div>
        <div className="screens1:items-start items-center screens1:h-[28rem] h-[4rem] flex screens1:flex-wrap flex-row justify-around w-full relative screens1:pt-[8.7rem] pt-0">
          <div className="text-center">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? `text-white w-[40px] h-[40px] flex justify-center items-center text-center`
                  : "w-[40px] h-[40px] flex justify-center items-center text-center"
              }
            >
              <AiOutlineHome className=" text-[27px] cursor-pointer" />
            </NavLink>
          </div>
          <div className="text-center">
            <NavLink
              to={"/find-friend"}
              className={({ isActive }) =>
                isActive
                  ? `text-white w-[40px] h-[40px] flex justify-center items-center text-center`
                  : "w-[40px] h-[40px] flex justify-center items-center text-center"
              }
            >
              <IoMdSearch className=" text-[27px] cursor-pointer" />
            </NavLink>
          </div>
          <div className="text-center">
            <NavLink
              to={"/make-friend"}
              className={({ isActive }) =>
                isActive
                  ? `text-white w-[40px] h-[40px] flex justify-center items-center text-center`
                  : "w-[40px] h-[40px] flex justify-center items-center text-center"
              }
            >
              <FaUserPlus className=" text-[27px] cursor-pointer" />
            </NavLink>
          </div>
          <div className="text-center relative">
            <NavLink
              to={"/messages"}
              className={({ isActive }) =>
                isActive
                  ? `text-white w-[40px] h-[40px] flex justify-center items-center text-center`
                  : "w-[40px] h-[40px] flex justify-center items-center text-center"
              }
            >
              <BiMessageDetail className=" text-[27px] cursor-pointer" />
            </NavLink>
            <div className="w-[18px] h-[18px] absolute  top-[-9px] bg-[#ff0c0c] right-[-6px] flex justify-center items-center rounded-[50px]">
              <span className="text-[11px] cursor-default text-[#ffffff] select-none">
                9+
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavberBottom;
