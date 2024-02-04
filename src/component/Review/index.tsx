"use client";
import { getReview } from "@/service/event";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ReviewItem {
  imageUrl: string;
  para: string;
  name: string;
}

export default function Index() {
  useEffect(() => {
    getData();
  }, []);
  const [val, setVal] = useState<ReviewItem[] | undefined>();
  const getData = async () => {
    const data = await getReview();
    console.log(data, "data");
    setVal(data.message);
  };
  return (
    <div className="bg-[#031d2e] py-8">
      <h3 className="text-center text-[36px] py-4 text-white py-8">
        What Our Customers Say
      </h3>
      <div className="grid sm:grid-cols-1  md:grid-cols-3">
        {val?.map((item) => (
          <>
            <div>
              <div className="w-11/12 m-auto sm:mt-4 bg-[#17384e] px-6 pb-8">
                <div className="rounded-full m-auto text-center">
                  <Image
                    src={item.imageUrl}
                    width={100}
                    height={100}
                    alt="this is image"
                    className="rounded-full m-auto"
                  />
                </div>

                <p className="text-white leading-8 py-4 text-center mt-4">
                  {item.para}
                </p>
                <h6 className="text-white leading-8 py-4 text-center text-[20px]">
                  {item.name}
                </h6>
              </div>
              <div></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
