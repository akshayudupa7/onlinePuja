import React from "react";
import Image from "next/image";
import Tabs from "@/component/Tabs"
export default function Index({ data }: any) {
  console.log(data, "data");
  return (
    <div className="w-11/12 m-auto">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 w-full gap-4">
        <div className="bg-green-500">
          <Image
            src={data.imageUrl}
            width={100}
            height={100}
            layout="responsive"
            alt="this is image"
            className="mt-4 mb-4"
          />
        </div>
        <div className="md:col-span-2 bg-green-500 ">
        <h6 className="text-white leading-6 text-[26px] mt-8">{data.title}</h6>
          <h6 className="text-white leading-8 text-[16px] mt-4">{data.para}</h6>
          <p className="text-white text-[24px] mt-4">Starting from price <span className="text-orange-700 "> : {data?.price}</span></p>
          <button className="w-[140px] bg-orange-500 mt-4 h-[40px] rounded-md">Book Now</button>
        </div>
      </div>
      <div>
      <Tabs data={data}/>
      </div>
    </div>
  );
}
