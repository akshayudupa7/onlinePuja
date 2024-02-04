"use client";
import { getProfile } from "@/service/event";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";

interface ProfileItem {
  imageUrl: string;
  name: string;
  place: string;
  
}
const Accordion = () => {
  const [activeContent, setActiveContent] = useState<number | null>(null); // Specify the type as number | null
  const [val, setVal] = useState<ProfileItem[] | undefined>();

  const handleContentClick = (index: number) => {
    setActiveContent(activeContent === index ? null : index);
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getProfile();
    setVal(data.message);
  };


  

 
  return (
    <div className="">
      <div className="w-11/12 m-auto bg-[#031d2e]">
        <div className="mb-2 bg-[#031d2e]">
          <div className="flex gap-4 pl-3 pt-3 ">
            <div
              className={`flex cursor-pointer ${
                activeContent !== null
                  ? "bg-[#031d2e] text-white"
                  : "bg-[#031d2e]"
              }`}
              onClick={() => handleContentClick(0)}
            >
              <span>
                {activeContent !== null ? (
                  <AiOutlineCaretDown className="text-white text-[22px]" />
                ) : (
                  <AiOutlineCaretRight className="text-white text-[22px]" />
                )}
              </span>
            </div>
            <div>
              <span className="text-white text-[22px]">Paurohitya</span>
            </div>
          </div>

          {activeContent !== null && (
            <div className="p-4 bg-[#031d2e] grid grid-cols-4">
              {val?.map((item) => (
                <div className="flex flex-col mt-4">
                  <Image
                    src={item.imageUrl}
                    width={130}
                    height={130}
                    className="mt-4"
                    alt="this is image"
                  />
                  <h5 className="text-white pt-4 text-[20px]">{item.name}</h5>
                  <p className="text-white pt-2">{item.place}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
