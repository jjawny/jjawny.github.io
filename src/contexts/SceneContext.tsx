import { createContext, ReactNode, useContext, useState } from "react";

type SceneContextType = {
  isShowPersonalScreen: boolean;
  toggleIsShowPersonalScreen: (isShow: boolean) => void;
};

const SceneContext = createContext<SceneContextType | undefined>(undefined);

const SceneContextProvider = ({ children }: { children: ReactNode }) => {
  const [isShowPersonalScreen, setIsShowPersonalScreen] = useState<boolean>(false);
  const toggleIsShowPersonalScreen = (isShow: boolean) => setIsShowPersonalScreen(isShow);

  return (
    <SceneContext.Provider value={{ isShowPersonalScreen, toggleIsShowPersonalScreen }}>
      {children}
    </SceneContext.Provider>
  );
};

const useSceneContext = () => {
  const ctx = useContext(SceneContext);
  if (!ctx) throw new Error("useSceneContext must be used inside a SceneContextProvider");
  return ctx;
};

export { SceneContextProvider, useSceneContext };
