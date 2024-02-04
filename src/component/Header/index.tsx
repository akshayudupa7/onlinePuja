"use client";
import { getHeader } from "@/service/header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modals from "@/component/Modals";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Header from "@/component/Header"
import Dropdown from "../Dropdown";


interface HeaderItem {
  imageUrl: string;
  logo: string;
  phone: string;
  pathA: string;
  linkA: string;
  pathB: string;
  linkB: string;
  pathC: string;
  linkC: string;
  pathD: string;
  linkD: string;
  pathE: string;
  linkE: string;
}
export default function Index() {
  useEffect(() => {
    getData();
  }, []);

  const [activeContent, setActiveContent] = useState<number | null>(null);

  const handleContentClick = (index: number) => {
    setActiveContent(activeContent === index ? null : index);
  };

  const [value, setValue] = useState<HeaderItem[]>();
  const getData = async () => {
    const data = await getHeader();
    setValue(data.message);
  };

  return (
    <>
      <div className="w-full hidden lg:block  bg-blue-950 py-6">
        <div className="w-11/12 m-auto">
          {value?.map((item) => (
            <>
              <div className="grid grid-cols-3">
                <div>
                  <Image
                    src={item.imageUrl}
                    width={250}
                    height={200}
                    alt="this is image"
                  />
                </div>
                <div className="flex flex-row gap-3">
                  <Image
                    src={item.logo}
                    width={40}
                    height={30}
                    alt="this is image"
                  />
                  <p className="pt-2 text-orange-800 font-medium mt-2">
                    Call Us : <span className="text-white ">{item.phone}</span>
                  </p>
                </div>

                <div className="flex gap-4 mt-4">
                  <Link className="text-white" href={item.pathA}>
                    {item.linkA}
                  </Link>
                  <Link className="text-white" href={item.pathB}>
                    {item.linkB}
                  </Link>
                  <Link className="" href={item.pathC}>
                  <Dropdown/>
                  </Link>
                  <Link className="text-white" href={item.pathD}>
                    {item.linkD}
                  </Link>
                  <Link className="text-white" href={item.pathE}>
                    {item.linkE}
                  </Link>
                  <Link href="">
                    <Modals />
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="w-full  m-auto bg-[#031d2e]">
          <div className=" bg-[#031d2e]">
            <div className="flex justify-between  gap-4 pl-3 pt-3 ">
              <div>
                <Image
                  src="https://www.harigurus.com/static/media/newLogo.798283e0.png"
                  width={250}
                  height={200}
                  alt="this is image"
                />
              </div>
              <div
                className={`flex cursor-pointer ${
                  activeContent !== null
                    ? "bg-[#031d2e] text-white"
                    : "bg-[#031d2e]"
                }`}
                onClick={() => handleContentClick(0)}
              >
                <span className="">
                  {activeContent !== null ? (
                    <HiOutlineMenuAlt1 className="text-white text-right text-[40px]" />
                  ) : (
                    <HiOutlineMenuAlt2 className="text-white  text-right text-[40px]" />
                  )}
                </span>
              </div>
            </div>

            {activeContent !== null && (
              <div className="p-4 bg-[#031d2e] grid grid-cols-4">
                <div>
                  <p>
                    <Link href="/" className="text-white text-[16px]">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link href="/about" className="text-white text-[16px]">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link href="/service" className="text-white text-[16px]">
                   Service
                    </Link>
                  </p>
                  <p>
                    <Link href="/profile" className="text-white text-[16px]">
                      Profile
                    </Link>
                  </p>
                  <p>
                    <Link href="/contact" className="text-white text-[16px]">
                      Contact
                    </Link>
                  </p>
                  <p>
                    <Link href="" className="text-white text-[16px]">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
