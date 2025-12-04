"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/atoms/Container/Container";
import Logo from "@/components/atoms/Logo/Logo";
import NavWrapper from "@/components/molecules/NavWrapper/NavWrapper";
import AuthPanelButtons from "@/components/molecules/AuthPanelButtons/AuthPanelButtons";
import Sidebar from "../Sidebar/Sidebar";

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  return (
    <div className="w-full pt-4">
      <Container>
        <header className="border border-gray-50 py-2 pl-4 pr-3 w-full bg-white rounded-[10px]">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="max-lg:hidden">
              <NavWrapper />
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleSidebar} className="lg:hidden block">
                <AnimatePresence mode="wait">
                  {showSidebar ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <div className="max-lg:hidden">
                <AuthPanelButtons />
              </div>
            </div>
          </div>
        </header>
      </Container>
      <AnimatePresence>
        {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
