"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NestModals from "@/component/NestModals"
import { postLogin } from "@/service/user";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const  Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center  justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50 "></div>
          <div className="relative z-50  bg-[#17384e] p-6 rounded-sm h-[90vh] w-[40%] ">
            <div className="absolute top-0 right-0 p-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    const data=await postLogin(formData)
    console.log(data)
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

 
  return (
    <div className=" flex items-center justify-center">
      <button onClick={openModal} className="text-white">
        Sign
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <h3 className="font-bold text-[22px] mb-4 text-[white]">Login</h3>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700  text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full m-auto">
          <button
            onClick={handleSubmit}
            className="bg-[#f56200] text-white py-2 px-4 rounded-md  w-full   mt-4"
          >
            Login
          </button>

          </div>
       
        </form>
        <div className="flex flex-row justify-between mt-8">
          <p className="text-white">Create an account</p>
          <Link href=""><NestModals/></Link>
        </div>
      </Modal>
    </div>
  );
};

export default App;
