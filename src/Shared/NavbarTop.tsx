import presonlogo from "../assets/person-img.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Activity from "../pages/Activity";
import PortfolioInfo from "../pages/PortfolioInfo";

function NavbarTop() {
  const [showLoginNav, setshowLoginNav] = useState(false);

  // Show Activity
  const [showActivity, setshowActivity] = useState(false);

  // Show PortfolioInfo
  const [showPortfolioInfo, setshowPortfolioInfo] = useState(false);

  return (
    <div>
      <nav className=" w-full fixed top-0 left-0 right-0 flex z-[51]">
        <div className="mx-auto px-[18px] w-[100%] flex justify-center items-center relative h-[4.7rem] bg-[#1F2022] screens1:border-b-[1.5px] border-b-0 border-b-[#2f2f2f]">
          {showLoginNav ? (
            <img src={logo} className="w-[118px]" />
          ) : (
            <div className="w-full flex items-center justify-between ">
              <div className="">
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? `flex` : "hidden")}
                >
                  <img src={logo} className="w-[118px]" />
                </NavLink>

                <NavLink
                  to={"/find-friend"}
                  className={({ isActive }) => (isActive ? `flex` : "hidden")}
                >
                  <h1 className="PoppinsFont text-[19px] font-[600]">
                    Find Friend
                  </h1>
                </NavLink>

                <NavLink
                  to={"/make-friend"}
                  className={({ isActive }) => (isActive ? `flex` : "hidden")}
                >
                  <h1 className="PoppinsFont text-[19px] font-[600]">
                    Make Friend
                  </h1>
                </NavLink>
                <NavLink
                  to={"/messages"}
                  className={({ isActive }) => (isActive ? `flex` : "hidden")}
                >
                  <h1 className="PoppinsFont text-[19px] font-[600]">
                    Messages
                  </h1>
                </NavLink>
              </div>
              <div className="items-center flex justify-between">
                <div className="text-center">
                  <p
                    onClick={() => {
                      setshowActivity(true);
                    }}
                  >
                    <IoMdNotificationsOutline className=" text-[30px] cursor-pointer" />
                  </p>
                </div>
                <div
                  onClick={() => {
                    setshowPortfolioInfo(true);
                  }}
                  className="w-[35px] h-[35px] rounded-[50%] ml-[15px] cursor-pointer"
                >
                  <img
                    src={presonlogo}
                    className="w-[100%] h-[100%] object-cover rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Activity setshowActivity={setshowActivity} showActivity={showActivity} />
      <PortfolioInfo
        setshowPortfolioInfo={setshowPortfolioInfo}
        showPortfolioInfo={showPortfolioInfo}
      />
    </div>
  );
}

export default NavbarTop;
