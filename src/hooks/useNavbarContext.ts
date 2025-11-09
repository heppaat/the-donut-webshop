// Custom hook to use Navbar context

import { useContext } from "react";
import { NavbarContext } from "@/contexts/NavbarContext";

function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a NavbarProvider");
  }
  return context;
}

export default useNavbarContext;
