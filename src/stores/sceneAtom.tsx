import { atom, useAtomValue, useSetAtom } from "jotai";

/*
Notes:
  - r3f <Html> uses react portals
  - this means we are unable to use a react ctx (older commit) as
    r3f <Html> content was always mounted outside of provider, even
    when wrapping _app itself w the provider)
  - solution is to use a lib that allows for global state beyond the react tree (jotai)
*/
type SceneAtomType = {
  isShowPersonalScreen: boolean;
  isShowScrollIndicator: boolean;
};

const initialValues: SceneAtomType = {
  isShowPersonalScreen: false,
  isShowScrollIndicator: true,
};

const sceneAtom = atom<SceneAtomType>(initialValues);

const useSceneContext = () => {
  const sceneState = useAtomValue(sceneAtom);
  const setSceneState = useSetAtom(sceneAtom);
  const toggleIsShowPersonalScreen = (isShow: boolean) => {
    setSceneState((curr) => ({ ...curr, isShowPersonalScreen: isShow }));
  };
  const toggleIsShowScrollIndicator = (isShow: boolean) => {
    setSceneState((curr) => ({ ...curr, isShowScrollIndicator: isShow }));
  };
  return { sceneState, toggleIsShowPersonalScreen, toggleIsShowScrollIndicator };
};

export { useSceneContext };
