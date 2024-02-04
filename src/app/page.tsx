import React from "react";
import Main from "@/component/Occassion";
import Events from "@/component/Events";
import Review from "@/component/Review";
import Recent from "@/component/Recent";
import Choose from "@/component/Choose";
export default function Page() {
  return (
    <div>
         <p className="pt-2 m-auto bg-sky-950 sm:grid-cols-2  object-cover absolute rounded-2xl text-[28px] h-44 gap-4  relative rounded-full sm:mt-4 text-[36px] w-10/12 lg:hidden flex justify-between text-right hidden lg:block  grid grid-cols-3 sm:grid-cols-1  w-[140px] bg-orange-500 h-[40px] rounded-md py-6 w-[40px] grid-cols-4 sm:grid-cols-1 text-orange-700  mt-6 text-[24px]  w-full bg-red w-full px-3 bg-[#031d2e] leading-6 shadow-lg p-6 col-span-2 mb-8  bg-black  shadow-sm p-6 bg-white rounded-md    grid-cols-4 sm:grid-cols-1  w-3/12 text-black-800 bg-red-800 grid  grid-cols-6 bg-blue-950 gap-4 p-2 font-medium">
                  Call Us 
           </p>
          
      <Main />
      <Events />
      <Review />
      <Choose />

      <Recent />
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <img
        className="w-full h-40 object-cover"
        src="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Lizard</h2>
        <p className="text-gray-600">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </p>
      </div>
      <div className="p-4 bg-gray-100">
        <button className="text-blue-500">Share</button>
        <button className="text-blue-500 ml-2">Learn More</button>
      </div>
    </div>
     
    </div>
  );
}
