"use client";
import { getEventByCategory } from "@/service/event";
import React, { useEffect, useState } from "react";
import CommonCategory from "@/component/CommonCategory";
import CommonId from "@/component/commonId";

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
    detail: string;
  };
}

export default function Page({ params }: PageProps) {
  const value = params.detail;
  const [fun, setFun] = useState<EventData[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getEventByCategory(value);
    setFun(data.message);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-4 bg-[#031d2e] py-8">
        {fun.map((item) => (
          <CommonId key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
