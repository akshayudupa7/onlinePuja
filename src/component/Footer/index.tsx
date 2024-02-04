"use client";
import { getFooter } from "@/service/footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Index() {
  const [val, setVal] = useState<FooterItem[] | undefined>();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getFooter();
    setVal(data.message);
  };
  interface FooterItem {
    imageUrl: string;
    para: string;
    titleA: string;
    pathA: string;
    linkA: string;
    titleB: string;
    address: string;
    email: string;
    phoneA: string;
    pathB: string;
    linkB: string;
    pathC: string;
    linkC: string;
    pathD: string;
    linkD: string;
    pathE: string;
    linkE: string;
  }
  return (
    <div className="w-full bg-blue-950 py-12">
      {val?.map((item) => (
        <div className="w-11/12 m-auto grid grid-cols-3 gap-3">
          <div>
            <Image
              src={item.imageUrl}
              width={300}
              height={200}
              alt="this is image"
            />
            <p className="text-white text-[16px] mt-4 leading-9">{item.para}</p>
          </div>
          <div className="flex flex-col m-auto">
            <h5 className="text-white text-[24px] mb-4">{item.titleA}</h5>
            <Link className="text-white text-[16px] mb-4" href={item.pathA}>
              {item.linkA}
            </Link>
            <Link className="text-white text-[16px] mb-4" href={item.pathB}>
              {item.linkB}
            </Link>
            <Link className="text-white text-[16px] mb-4" href={item.pathC}>
              {item.linkC}
            </Link>
            <Link className="text-white text-[16px] mb-4" href={item.pathD}>
              {item.linkD}
            </Link>
            <Link className="text-white text-[16px] mb-4" href={item.pathE}>
              {item.linkE}
            </Link>
          </div>
          <div>
            <h5 className="text-white text-[24px] mb-4">{item.titleB}</h5>
            <p className="text-white text-[16px] mb-4">{item.address}</p>
            <p className="text-white text-[16px] mb-4">{item.email}</p>
            <p className="text-white text-[16px] mb-4">{item.phoneA}</p>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}
