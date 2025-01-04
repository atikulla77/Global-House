function Home() {
  const HomeData = [
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
    <div className="w-[100%] h-[100vh] absolute top-0 left-0 bottom-0 overflow-y-auto pt-[6.5rem] pb-[4rem] screens1:pl-[70px] pl-0 flex justify-center flex-wrap bg-[#1F2022] scrollbar-hide">
      {HomeData.map((key) => {
        return (
          <div key={key.id} className="[@media(min-width:410px)]:w-[380px] w-[300px] [@media(min-width:410px)]:h-[10rem] h-[8rem] mx-[15px] bg-[#2A2B30] text-white flex items-center justify-between [@media(min-width:410px)]:px-[1rem] px-[0.8rem] [@media(min-width:410px)]:py-[1rem] py-[0.8rem] mb-[20px] rounded-[15px]">
            <div className=" flex flex-col [@media(min-width:410px)]:w-[205px] w-[180px] justify-start items-center">
              <div className="w-full flex items-center pb-[6px]">
                <img
                  src="https://img.freepik.com/free-vector/rabbit-head-illustration-logo-design-line-art_779267-873.jpg"
                  className="[@media(min-width:410px)]:w-[22px] w-[17px] [@media(min-width:410px)]:h-[22px] h-[17px] rounded-[30%] "
                  alt=""
                />
                <h1 className="[@media(min-width:410px)]:text-[13px] text-[10px] font-[400] [@media(min-width:410px)]:pl-[7px] pl-[4px] PoppinsFont">
                  Hocus 45 th's Rabbit hole
                </h1>
              </div>

              <h1 className="w-full [@media(min-width:410px)]:text-[17px] text-[15px] [@media(min-width:410px)]:leading-[25px] leading-[23px] font-[600] [@media(min-width:410px)]:py-[3px] py-[2px] PoppinsFont">
                3rd Shift: ITS GETTING GOOOOD!
              </h1>

              <div className="w-full flex items-center [@media(min-width:410px)]:pt-[6px] pt-[3px]">
                <p className="[@media(min-width:410px)]:text-[11px] text-[9px] font-[500]">
                  (<span className="mx-[2px]">•</span>)
                </p>
                <p className="[@media(min-width:410px)]:text-[13px] text-[10px] font-[500] [@media(min-width:410px)]:ml-[7px] ml-[5px] PoppinsFont">
                  speaking now
                </p>
              </div>
            </div>
            <div className="[@media(min-width:410px)]:w-[145px] w-fit flex flex-col justify-end mr-[-3px]">
              <div className="flex justify-end w-full [@media(min-width:410px)]:pr-[15px] pr-[10px] relative z-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVFwiCwqjKjyL7tVfEMrswvIV_NgKDbRCdw&s"
                  className="[@media(min-width:410px)]:w-[53px] w-[38px] [@media(min-width:410px)]:h-[53px] h-[38px] [@media(min-width:410px)]:border-[6px] border-[4px] border-[#2A2B30] [@media(min-width:410px)]:rounded-[21px] rounded-[17px] [@media(min-width:410px)]:mr-[-14px] mr-[-9px] relative z-[3]"
                  alt=""
                />
                <img
                  src="https://as1.ftcdn.net/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg"
                  className="[@media(min-width:410px)]:w-[53px] w-[38px] [@media(min-width:410px)]:h-[53px] h-[38px] [@media(min-width:410px)]:border-[6px] border-[4px] border-[#2A2B30] [@media(min-width:410px)]:rounded-[21px] rounded-[17px] [@media(min-width:410px)]:mr-[-14px] mr-[-9px] relative z-[2]"
                  alt=""
                />
                <img
                  src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg"
                  className="[@media(min-width:410px)]:w-[53px] w-[38px] [@media(min-width:410px)]:h-[53px] h-[38px] [@media(min-width:410px)]:border-[6px] border-[4px] border-[#2A2B30] [@media(min-width:410px)]:rounded-[21px] rounded-[17px] relative z-[1]"
                  alt=""
                />
              </div>
              <div className="flex justify-end w-full [@media(min-width:410px)]:mt-[-12px] mt-[-8px] relative z-[1]">
                <img
                  src="https://www.hospicevaughan.com/wp-content/uploads/2021/01/portrait-square-03.jpg"
                  className="[@media(min-width:410px)]:w-[54px] w-[39px] [@media(min-width:410px)]:h-[53px] h-[39px] [@media(min-width:410px)]:border-[6px] border-[4px] border-[#2A2B30] [@media(min-width:410px)]:rounded-[21px] rounded-[17px] [@media(min-width:410px)]:mr-[-14px] mr-[-9px] relative z-[3]"
                  alt=""
                />
                <img
                  src="https://focusforensics.com/wp-content/uploads/staff-clayton_mccall-square.jpg"
                  className="[@media(min-width:410px)]:w-[54px] w-[39px] [@media(min-width:410px)]:h-[53px] h-[39px] [@media(min-width:410px)]:border-[6px] border-[4px] border-[#2A2B30] [@media(min-width:410px)]:rounded-[21px] rounded-[17px] [@media(min-width:410px)]:mr-[-14px] mr-[-9px] relative z-[2]"
                  alt=""
                />

                <div className="[@media(min-width:410px)]:w-[54px] w-[39px] [@media(min-width:410px)]:h-[53px] h-[39px] [@media(min-width:410px)]:border-[6px] border-[4px] bg-[#3D3E43] border-[#2A2B30] [@media(min-width:410px)]:rounded-[21px] rounded-[17px] flex items-center justify-center text-center relative z-[1]">
                  <p className="[@media(min-width:410px)]:text-[12px] text-[9px] font-[600] [@media(min-width:410px)]:leading-[10px] leading-[8px] mt-[-1px]">
                    +230
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
