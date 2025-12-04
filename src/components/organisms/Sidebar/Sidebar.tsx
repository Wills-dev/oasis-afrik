"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

import Container from "@/components/atoms/Container/Container";
import AuthPanelButtons from "@/components/molecules/AuthPanelButtons/AuthPanelButtons";
import NavWrapper from "@/components/molecules/NavWrapper/NavWrapper";

const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed top-0 min-h-screen h-full max-w-sm w-full right-0 bg-white backdrop   lg:hidden z-10`}
    >
      <Container>
        <div className="py-8 space-y-4  h-screen flex flex-col">
          <div className="flex justify-end">
            <button onClick={toggleSidebar}>
              <motion.span
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            </button>
          </div>
          <div className="flex flex-col justify-between gap-10 flex-1">
            <NavWrapper />
            <AuthPanelButtons />
          </div>
        </div>
      </Container>
    </motion.aside>
  );
};

export default Sidebar;
