import React from "react";

export default function Page() {
  return (
    <div>
      <div className="w-full bg-[#031d2e] py-8">
        <div className="w-11/12 m-auto">
          <h5 className="text-white text-[22px]">Contact Information</h5>
          <div className="grid grid-cols-6  mt-8">
            <div>
              <h6 className="text-[#ff7010] text-[18px]">Call Us</h6>
              <p  className="text-[#fff] text-[14px]">9353066802</p>
              <p  className="text-[#fff] text-[14px]">8079687199</p>
            </div>
            <div>
              <h6  className="text-[#ff7010] text-[18px]" >Mail Us</h6>
              <p className="text-[#fff] text-[14px]">harigurus2021@gmail.com</p>
            </div>
            <div className="col-span-3 bg-[#17384e] p-8">
              <h5 className="text-white text-[20px]">Have A Question /FeedBack</h5>
              <div className="flex flex-col">
                <label className="text-white my-3">Name</label>
                <input className="border rounded-sm h-[40px] bg-[#17384e] border border-solid border-white border-opacity-10 text-white" type="text" />
              </div>
              <div  className="flex flex-col">
                <label className="text-white my-3">Mobile</label>
                <input  className="border rounded-sm h-[40px] bg-[#17384e] border border-solid border-white border-opacity-10  text-white " type="text" />
              </div>
              <div  className="flex flex-col">
                <label className="text-white my-3">Email</label>
                <input className="border rounded-sm h-[40px] bg-[#17384e] border border-solid border-white border-opacity-10  text-white" type="text" />
              </div>
              <div  className="flex flex-col">
                <label className="text-white my-3">Question/FeedBack</label>
                <input  className="border rounded-sm h-[60px] bg-[#17384e] border border-solid border-white border-opacity-10 " type="text" />
              </div>
              <div className="text-white my-2">
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
