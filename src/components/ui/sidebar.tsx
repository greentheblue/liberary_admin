"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  ChevronDown, 
  Layout, 
  FileText, 
  LogOut,
  UserCircle2,
  Boxes,
  PlusCircle,
  Building,
  Users,
  User,
} from "lucide-react";

type MenuItem = {
  title: string;
  path?: string;
  icon: React.ReactNode;
  submenu?: {
    title: string;
    path: string;
    icon: React.ReactNode;
  }[];
};

const menuItems: MenuItem[] = [
  {
    title: "Entity",
    icon: <Boxes className="w-5 h-5" />,
    submenu: [
      {
        title: "Add",
        path: "/dashboard/entity/add",
        icon: <PlusCircle className="w-4 h-4" />,
      },
      {
          title: "All Entity",
          path: "/dashboard/entity",
          icon: <Building className="w-4 h-4" />,
       },
    ],
  },
  {
    title: "Staff",
    icon: <Users className="w-5 h-5" />,
    submenu: [
      {
        title: "Add",
        path: "/dashboard/staff/add",
        icon: <PlusCircle className="w-4 h-4" />,
      },
      {
          title: "All Staff",
          path: "/dashboard/staff",
          icon: <Users className="w-4 h-4" />,
       },
    ],
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "Report",
    path: "/dashboard/report",
    icon: <FileText className="w-5 h-5" />,
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle click outside to close sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white dark:bg-gray-800 p-2 rounded-md shadow-md"
      >
        <Layout className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white dark:bg-background shadow-xl z-50 transition-transform duration-300 ease-in-out",
          "flex flex-col",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b dark:border-gray-800">
          <div className="flex items-center gap-2">
            <Layout className="w-8 h-8 text-primary" />
            <span className="font-bold text-xl">Dashboard</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.submenu ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={cn(
                        "w-full flex items-center justify-between p-2 rounded-md",
                        "hover:bg-white/90 dark:hover:bg-white/20",
                        "transition-colors duration-200",
                        openSubmenu === item.title && "bg-white/90 dark:bg-white/20"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openSubmenu === item.title && "transform rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200 ease-in-out",
                        openSubmenu === item.title ? "max-h-40" : "max-h-0"
                      )}
                    >
                      <ul className="pl-9 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.path}>
                            <Link
                              href={subitem.path}
                              className={cn(
                                "flex items-center gap-3 p-2 rounded-md",
                                "hover:bg-white/90 dark:hover:bg-white/20",
                                "transition-colors duration-200",
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.icon}
                              <span>{subitem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path!}
                    className={cn(
                      "flex items-center gap-3 p-2 rounded-md",
                      "hover:bg-white/90 dark:hover:bg-white/20",
                      "transition-colors duration-200",
                      pathname === item.path && 
                      "bg-primary text-primary-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t dark:border-gray-800 p-4 space-y-2">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/90 dark:hover:bg-white/20 transition-colors duration-200"
          >
            <UserCircle2 className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <button
            onClick={() => {/* Add logout logic */}}
            className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-[#FF0000]/20 transition-colors duration-200 text-red-600 dark:text-red-400"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}