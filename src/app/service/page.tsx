"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/service/services";
import CommonCategory from "@/component/CommonCategory";
import slugify from "slugify";

interface Service {
  path: string;
  imageUrl: string;
  title: string;
  description: string;
}

export default function Page() {
  const [value, setValue] = useState<Service[] | undefined>(undefined);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const val = await getServices();

      setValue(val?.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-4 bg-[#09273c]">
      {value?.map((item) => (
        <>
          <CommonCategory data={item} />
        </>
      ))}
    </div>
  );
}
