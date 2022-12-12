import { createContext, useState } from "react";

export type ContextApiType = {
  changeNavColor: boolean;
  setChangeNavColor: React.Dispatch<React.SetStateAction<boolean>>;
  typeSelect: string | null;
  setTypeSelect: React.Dispatch<React.SetStateAction<string | null>>;
  scrollToTop: () => void;
  isShowProperty: boolean;
  setIsShowProperty: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ScrollContextProps = {
  children: React.ReactNode;
};

export const ContextApiData = createContext<ContextApiType>(
  {} as ContextApiType
);

const CreateContext: React.FC<ScrollContextProps> = ({ children }) => {
  const [changeNavColor, setChangeNavColor] = useState(false);
  const [typeSelect, setTypeSelect] = useState<null | string>("All");
  const [isShowProperty, setIsShowProperty] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <ContextApiData.Provider
      value={{
        changeNavColor,
        setChangeNavColor,
        scrollToTop,
        typeSelect,
        setTypeSelect,
        isShowProperty,
        setIsShowProperty,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </ContextApiData.Provider>
  );
};

export default CreateContext;
