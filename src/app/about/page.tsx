"use client";
import React, { useEffect, useState } from "react";
import { getAbout } from "@/service/about";
import Image from "next/image";

interface Store {
  message: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export default function Page() {
  const [store, setStore] = useState<Store>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getAbout();
    setStore(data);
  };

  return (
    <div>
      <div className="w-full bg-[#031d2e] py-8">
        <div className="flex">
          <h6 className="text-white text-center w-full text-[32px] py-4">About</h6>
        </div>
        <div className="w-11/12  m-auto">
          {store?.message?.map((item, index) => (
            <div key={index} className="flex flex-row gap-6 mt-8">
              <div className="w-1/2">
                {item?.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    width={100}
                    height={100}
                    alt="this is image"
                    layout="responsive"
                  />
                )}
              </div>
              <div className="w-4/5 ">
                <h6 className="text-white text-[26px]">{item.title}</h6>
                <div className="border-2 border-orange-500 w-2/12 mb-4 mt-4"></div>
                <p className="text-white text-[16px] leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
