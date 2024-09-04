import React, { ReactNode } from "react";
import Sidebar, { SidebarItem } from "./SidebarSetup";
import { Home } from "lucide-react";

interface SidebarComponentProps {
  children: ReactNode;
}

const SidebarComponent = ({ children }: SidebarComponentProps) => {
  return (
    <>
      <div className="flex">
        <Sidebar>
          {children}
        </Sidebar>
      </div>
    </>
  );
};

export default SidebarComponent;
