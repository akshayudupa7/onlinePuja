import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Index({ data }: any) {
  console.log(data, "m");
  return (
    <div className="w-full bg-[#031d2e]">
      <div className="mt-4 lg:w-11/12  m-auto rounded-lg  ">
        <Link key={data.path} href={`/service/${data.category}/${data.slug}`}>
        <div className="max-w-md mx-auto bg-sky-950 rounded-md overflow-hidden shadow-md">
              <img
                className="w-full h-40 object-cover"
                src={data.imageUrl}
                alt="green iguana"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {data.title}
                </h2>
                <p className="text-white">{data.para}</p>
              </div>
            </div>

        </Link>
      </div>
    </div>
  );
}
