"use client";
import React, { useState } from "react";
import Link from "next/link";
import { postRegister } from "@/service/user";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


const  Modal: React.FC<ModalProps> =({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center  justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50 "></div>
          <div className="relative z-50 bg-[#17384e] p-6 rounded-lg h-[80vh] w-[40%] ">
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

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData,'formData')
  };

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data=await postRegister(formData)
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
        Register
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <h3 className="font-bold text-[22px] mb-4 text-white">Sign Up</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm text-white font-medium ">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm text-white font-medium ">
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
        <label htmlFor="password" className="block text-sm text-white font-medium ">
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

      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-white">
          Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
      
        </select>
      </div>

      <button
    type="submit"  // Add this line to make the button trigger the form submission
    className="text-white py-2 px-4 rounded-md bg-[#f56200] hover:bg-blue-700"
  >
    Register
  </button>
    </form>
      </Modal>
    </div>
  );
};

export default App;
