"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import Logo from "@/public/logo.png";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import Image from "next/image";

interface SidebarSetupProps {
    children: ReactNode;
  }

  interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    active: boolean;
    alert?: boolean;
  }

const SidebarContext = createContext({ isExpanded: true });

const SidebarSetup = ({ children }: SidebarSetupProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <aside className="h-screen ">
        <nav className="h-full flex flex-col bg-white text-black border-r shadow-md">
          <div className="p-4 pb-2 flex justify-between items-center">
            <Image
              src={Logo}
              alt="Logo"
              className={`overflow-hidden transition-all ${
                isExpanded ? "w-20" : "w-0"
              }`}
              placeholder="blur"
              priority={true}
            />
            {isClient && (
              <button
                onClick={() => setIsExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-emerald-100"
              >
                {isExpanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            )}
          </div>

          <SidebarContext.Provider value={{ isExpanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          {/* <div className="border-t flex p-3">
            <Image src={Logo} alt="Logo" className="w-10 h-10 rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                isExpanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Profile</h4>
                <span className="text-xs text-gray-500">
                  Kevin_grittner@outlook.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div> */}
        </nav>
      </aside>
    </>
  );
};

const Sidebar: React.FC<SidebarSetupProps> = ({ children }) => {
    return (
      <div className="sidebar">
        {children}
      </div>
    );
  };

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { isExpanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          isExpanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            isExpanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!isExpanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-emerald-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export default SidebarSetup;
