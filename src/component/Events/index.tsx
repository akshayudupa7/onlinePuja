'use client'
import { getEventByCategory } from "@/service/event";
import React, { useEffect, useState } from "react";

export default function Index() {
  useEffect(() => {
    getData();
  }, []);

  const [val, setVal] = useState<any[]>(); // Define the type explicitly

  const getData = async () => {
    const data = await getEventByCategory("paurohitya");
    setVal(data.message);
  };

  return (
    <div className="bg-[#031d2e] ">
      <h5 className="text-center text-white text-[36px] pt-8 pb-4">
        Most Popular Events
      </h5>
      <p className="text-center text-white text-[16px] mt-4 pb-4">
        Check out the most in-demand events for your easy reference to book our
        services today
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 w-11/12 m-auto gap-4">
        {val?.map((item) => (
          <div className="bg-[#031d2e]" key={item.id}> {/* Add a key for each item */}
            <div className="shadow-md rounded-md bg-[#17384e] py-8 px-3 mt-4">
              <h6 className="text-center text-white mb-4 text-[24px]">{item.title}</h6>
              <p className="text-center text-white leading-6">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
