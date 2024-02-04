'use client'
import { getChoose } from '@/service/event'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


interface ChooseItem {
  title: string;
  para: string;
  imageUrlA: string;
  nameA: string;
  imageUrlB: string;
  nameB: string;
  imageUrlC: string;
  nameC: string;
}

export default function Index() {
  const [val, setVal] = useState<ChooseItem[] | undefined>(); 
    useEffect(()=>{
    getData()
    },[])
    const getData=async()=>{
    const data=await getChoose()
       setVal(data.message)
    }

  return (
    <div>
      <div className='  py-6 bg-[#031d2e]'>
           {
            val?.map((item)=>(
                <div className='w-11/12 m-auto grid md:grid-cols-4 sm:grid-cols-1 gap-4'>
                <div className=''>
                    <h6 className='text-white text-[28px] font-medium'>{item.title}</h6>
                    <p className='text-white text-[16px] leading-8'>{item.para}</p>
                </div>
                <div>
                    <Image src={item.imageUrlA} width={100} height={100} alt="this is image"/>
                    <h5  className='text-white text-[22px] mt-4'>{item.nameA}</h5>
                </div>
                <div>
                    <Image src={item.imageUrlB} width={100} height={100} alt="this is image"/>
                    <h5 className='text-white text-[22px] mt-4 '>{item.nameB}</h5>
                </div>
                <div>
                    <Image src={item.imageUrlC} width={100} height={100} alt="this is image"/>
                    <h5 className='text-white text-[22px] mt-4'>{item.nameC}</h5>
                </div>
                </div>
             

            ))
           }
      </div>
    </div>
  )
}
