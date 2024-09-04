import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SidebarComponent from "@/components/SidebarComponent";
import { SidebarItem } from "@/components/SidebarSetup";
import {
  LayoutDashboard,
  Home,
  Layers,
  Flag,
  LifeBuoy,
  Settings,
  Gamepad,
  Book,
} from "lucide-react";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <HeroSection />
      <div className="flex flex-1">
        {" "}
        <SidebarComponent>
          <SidebarItem key="home" icon={<Home size={20} />} text="Home" active={false}/>
          <SidebarItem key="consoles" icon={<Gamepad size={20} />} text="Consoles" active={false}/>
          <SidebarItem key="categories" icon={<LayoutDashboard size={20} />} text="Categories" active={false}/>
          <SidebarItem key="blog" icon={<Book size={20} />} text="Blog" active={false}/>
          {/* <SidebarItem icon={<Layers size={20} />} text="Tasks"/> */}
          {/* <SidebarItem icon={<Flag size={20} />} text="Reporting" /> */}
          <hr className="my-3" />
          <SidebarItem key="settings" icon={<Settings size={20} />} text="Settings" active={false}/>
          <SidebarItem key="help" icon={<LifeBuoy size={20} />} text="Help" active={false}/>
        </SidebarComponent>
        <div className="flex-1 mt-3">
          <main className="flex-1"></main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
