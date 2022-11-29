import React from "react";
import { createContext, useState } from "react";

export type ScrollContextType = {
  changeNavColor: boolean;
  setChangeNavColor: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToTop: () => void;
};

export type ScrollContextProps = {
  children: React.ReactNode;
};

export const ScrollContext = createContext<ScrollContextType>(
  {} as ScrollContextType
);

const CreateContext: React.FC<ScrollContextProps> = ({ children }) => {
  const [changeNavColor, setChangeNavColor] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const navColorHandler = () => {
    if (window.scrollY >= 80) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  };

  return (
    <ScrollContext.Provider
      value={{ changeNavColor, setChangeNavColor, scrollToTop }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default CreateContext;
