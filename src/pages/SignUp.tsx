import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [clickEye, setclickEye] = useState(true);
  const [clickEye2, setclickEye2] = useState(true);
  return (
    <div className="w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 overflow-y-auto flex items-center justify-center pt-[5rem] pb-[4rem] bg-[#1F2022] scrollbar-hide">
      <div className="container mx-auto flex flex-col py-[3rem] justify-center ">
        <div className="w-full relative mx-0 [@media(min-width:435px)]:px-[0] px-[1rem] PoppinsFont">
          <div className="relative [@media(min-width:435px)]:w-[400px] w-[100%] min-h-[400px] rounded-[10px] flex justify-center items-center shadow-[0px_0px_6px_0px_#35363a] mx-auto ">
            <div className="relative w-full h-full [@media(min-width:435px)]:p-[40px] p-[20px]">
              <h2 className="relative text-white text-[24px] tracking-[1px] text-center pb-[20px]">
                SignUp
              </h2>
              <form>
              <div className="mb-[15px] text-left">
                  <label className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      autoComplete="off"
                      required
                      placeholder="Amelia Rose"
                      className="inputStyleIng  border-[2px] border-[#35363a] text-white text-[13px] rounded-lg focus:ring-[#0C8BFD] focus:border-[#35363a] block w-full p-2.5 dark:!bg-transparent dark:border-[#35363a] placeholder-[#pffffff9c] dark:focus:ring-[#0C8BFD] dark:focus:border-[#0C8BFD] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText  text-[13px] text-white text-opacity-80 bg-[#1F2022] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text pr-[76px]">
                    Full Name
                    </span>
                  </label>
                </div>
                <div className="mb-[15px] text-left">
                  <label className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="off"
                      required
                      placeholder="example@gmail.com"
                      className="inputStyleIng  border-[2px] border-[#35363a] text-white  text-[13px] rounded-lg focus:ring-[#0C8BFD] focus:border-[#35363a] block w-full p-2.5 dark:!bg-transparent dark:border-[#35363a] placeholder-[#pffffff9c] dark:focus:ring-[#0C8BFD] dark:focus:border-[#0C8BFD] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText  text-[13px] text-white text-opacity-80 bg-[#1F2022] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text pr-[76px]">
                      Email address
                    </span>
                  </label>
                </div>
                <div className="mb-[15px] text-left">
                  <label className="relative">
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      autoComplete="off"
                      required
                      placeholder="0125538****"
                      className="inputStyleIng  border-[2px] border-[#35363a] text-white  text-[13px] rounded-lg focus:ring-[#0C8BFD] focus:border-[#35363a] block w-full p-2.5 dark:!bg-transparent dark:border-[#35363a] placeholder-[#pffffff9c] dark:focus:ring-[#0C8BFD] dark:focus:border-[#0C8BFD] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText  text-[13px] text-white text-opacity-80 bg-[#1F2022] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text pr-[76px]">
                      Phone Number
                    </span>
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type={clickEye ? "password" : "text"}
                      id="password"
                      name="password"
                      autoComplete="off"
                      required
                      placeholder="xxxxxxx"
                      className="inputStyleIng  border-[2px] border-[#35363a] text-white  text-[13px] rounded-lg focus:ring-[#0C8BFD] focus:border-[#35363a] block w-full p-2.5 dark:!bg-transparent dark:border-[#35363a] placeholder-[#pffffff9c] dark:focus:ring-[#0C8BFD] dark:focus:border-[#0C8BFD] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText  text-[13px] text-white text-opacity-80 bg-[#1F2022] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text pr-[76px]">
                      Password
                    </span>
                    <FaEyeSlash
                      onClick={() => setclickEye(true)}
                      className={`text-[16px] text-[#ffffff87] absolute right-[10px] top-[14px] cursor-pointer ${
                        clickEye ? "hidden" : ""
                      }`}
                    /> 
                    <FaEye
                      onClick={() => setclickEye(false)}
                      className={`text-[16px] text-[#ffffff87] absolute right-[10px] top-[14px] cursor-pointer ${
                        clickEye ? "" : "hidden"
                      }`}
                    />
                  </label>
                </div>
                <div className="mb-[12px] text-left">
                  <label className="relative">
                    <input
                      type={clickEye2 ? "password" : "text"}
                      id="confirmPassword"
                      name="confirmPassword"
                      autoComplete="off"
                      required
                      placeholder="xxxxxxx"
                      className="inputStyleIng  border-[2px] border-[#35363a] text-white  text-[13px] rounded-lg focus:ring-[#0C8BFD] focus:border-[#35363a] block w-full p-2.5 dark:!bg-transparent dark:border-[#35363a] placeholder-[#pffffff9c] dark:focus:ring-[#0C8BFD] dark:focus:border-[#0C8BFD] font-[500] outline-none"
                    />
                    <span className="inputStyleIngText  text-[13px] text-white text-opacity-80 bg-[#1F2022] absolute left-2 top-3 px-1 transition duration-200 input-text cursor-text pr-[76px]">
                    Confirm Password
                    </span>
                    <FaEyeSlash
                      onClick={() => setclickEye2(true)}
                      className={`text-[16px] text-[#ffffff87] absolute right-[10px] top-[14px] cursor-pointer ${
                        clickEye2 ? "hidden" : ""
                      }`}
                    /> 
                    <FaEye
                      onClick={() => setclickEye2(false)}
                      className={`text-[16px] text-[#ffffff87] absolute right-[10px] top-[14px] cursor-pointer ${
                        clickEye2 ? "" : "hidden"
                      }`}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  value="Submit Now"
                  className="text-[14px] w-full py-[8px] rounded-[50px] hover:!bg-transparent bg-[#0C8BFD] text-[#fff] hover:text-[#0C8BFD] border-[2px] border-[#0C8BFD] transition-[0.4s]"
                >
                  SignUp
                </button>

                {/* <p className="mt-[20px] text-white text-[14px]">
                  Forgot Password?
                  <a href="">
                    <span className="text-[#0C8BFD] pl-[5px] cursor-pointer">
                      Click Here
                    </span>
                  </a>
                </p> */}

                <p className="mt-[7px] text-white text-[13px]">
                Already Have an Account!
                  <a href={"/login"}>
                    <span className="text-[#0C8BFD] pl-[5px] cursor-pointer">
                      Login
                    </span>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
