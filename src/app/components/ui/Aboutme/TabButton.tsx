import React from "react";
import { motion } from "framer-motion";

// Define prop types
interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

// Variants for animation
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

// TabButton component
const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  // Dynamically set classes based on the active state
  const buttonClasses = active ? "text-white border-b border-green-500" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      {/* Tab button content */}
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {/* Animated bar */}
      <motion.div
        animate={active ? "active" : "default"} // Animation state based on active prop
        variants={variants} // Variants for animation
        className="h-1 bg-primary-500 mt-2 mr-3" // Styling for the bar
      ></motion.div>
    </button>
  );
};

export default TabButton;
