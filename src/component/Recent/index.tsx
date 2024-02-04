"use client";
import { getEventByCategory } from "@/service/event";
import React, { useEffect, useState } from "react";
import Image from "next/image";



interface EventItem {
  imageUrl: string;
  title: string;

}

export default function Index() {
  useEffect(() => {
    getData();
  }, []);

  const [val, setVal] = useState<EventItem[] | undefined>(); 

  const getData = async () => {
    const data = await getEventByCategory("paurohitya");
    setVal(data.message);
  };
  return (
    <div className="bg-[#031d2e]">
      <div className="w-8/12 m-auto py-6 ">
      <h5 className="text-center text-[28px] text-white">Recent Events</h5>
      <p className="text-center text-[16px]  text-white mb-6 mt-2">
        HariGurus continues to be the preferred place for our users to find
        purohits and cooks who make their events a grand success. See our recent
        bookings.
      </p>

      </div>
    
      <div className="grid md:grid-cols-4 sm:grid-cols-1">
        {val?.map((item) => (
          <div className="w-11/12 ">
            <Image
              src={item.imageUrl}
              width={200}
              height={200}
              layout="responsive"
              alt="this is image"
            />

            <h5 className="text-white text-[22px] mt-4 mb-8">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
