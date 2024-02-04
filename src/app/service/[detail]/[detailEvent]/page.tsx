"use client";
import { getEventByDetail } from "@/service/event";
import React, { useEffect, useState } from "react";
import CommonDetail from "@/component/CommonDetail";

interface EventData {
  // Define the structure of your event data here
  // Adjust these types according to your API response structure
  // For example, if the API response has properties like 'id', 'name', etc.
  id: string;
  name: string;
  // Add other properties as needed
}

interface PageProps {
  params: {
    detailEvent: string;
  };
}

export default function Page({ params }: PageProps) {
  const value = params.detailEvent;
  const [fun, setFun] = useState<EventData[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getEventByDetail(value);
    setFun(data.message);
  };

  return (
    <div className="w-full bg-red">
      <div>
        {fun?.map((item) => (
          <div key={item.id} className="bg-[#031d2e]">
            <CommonDetail data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
