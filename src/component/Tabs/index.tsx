// components/Tabs.js
import React, { useState } from 'react';
import "./index.css"



interface TabsProps {
  data: {
    description: string;
    help: string;

  };
}
const Tabs : React.FC<TabsProps> = ({data}) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber:number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="max-w-md  bg-[#031d2e]  p-8">
      <div className="flex space-x-4">
        <button
          onClick={() => handleTabClick(1)}
          className={`tab-btn ${activeTab === 1 ? 'active' : 'inactive'}`}
        >
       Description
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`tab-btn ${activeTab === 2 ? 'active' : 'inactive'}`}
        >
        How do we help?
        </button>
     
      </div>

      
      {activeTab === 1 && <div className='text-white leading-8 mt-6 pr-6'>{data.description}</div>}
      {activeTab === 2 && <div className='text-white leading-8 mt-6 pr-6'>{data.help}</div>}
    
    </div>
  );
};

export default Tabs;
