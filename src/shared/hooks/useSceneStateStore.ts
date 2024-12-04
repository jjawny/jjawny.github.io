import { create } from "zustand";

type SceneState = {
  isShowPersonalScreen: boolean;
  isShowScrollIndicator: boolean;
};

type SceneStateStore = {
  sceneState: SceneState;
  setSceneState: <K extends keyof SceneState>(key: K, value: SceneState[K]) => void;
};

const initialSceneState = { isShowPersonalScreen: false, isShowScrollIndicator: true };

const useSceneStateStore = create<SceneStateStore>((set) => ({
  sceneState: initialSceneState,
  setSceneState: (key, value) =>
    set((state) => {
      const nextData = { ...state.sceneState, [key]: value };
      return { ...state, sceneState: nextData };
    }),
}));

export default useSceneStateStore;
