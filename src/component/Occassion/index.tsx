"use client";
import { getOccassion } from "@/service/home";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Index() {
  const [val, setVal] = useState<Occasion[]>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getOccassion();
    console.log(data, "lm");
    setVal(data.message);
  };

  interface Occasion {
    title: string;
    main: string;
    para: string;
    description: string;
    imageUrl: string;
    // Add other properties as needed
  }
  return (
    <div>
      {val?.map((item) => (
        <div className="w-full py-6 bg-[#031d2e]">
          <div className="grid  md:grid-cols-2 sm:grid-cols-1 gap-8 py-8 w-10/12 m-auto ">
            <div className=" m-auto">
              <h6 className="text-[#ff7010] text-[24px]">{item.title}</h6>
              <h2 className="text-[#fff] text-[40px] mt-4 ">{item.main}</h2>
              <p className="text-[#fff] text-[16px] mt-4 leading-8">
                {item.para}
              </p>
              <p className="text-[#fff] text-[16px] mt-4 leading-8">
                {item.description}
              </p>
              <button className="bg-[#f56200] p-4 mt-4 font-medium text-[18px] text-white">BOOK APPOINTMENT</button>
            </div>

            <div>
              <Image
                src={item.imageUrl}
                width={300}
                height={300}
                alt="this is image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
