import useSceneStateStore from "~/features/shared/hooks/useSceneStateStore";

export function useManageIsShowPersonalScreen() {
  const isShowPersonalScreen = useSceneStateStore((state) => state.sceneState.isShowPersonalScreen);
  const setSceneState = useSceneStateStore((state) => state.setSceneState);
  const toggleIsShowPersonalScreen = (isShow: boolean) => setSceneState("isShowPersonalScreen", isShow);

  return { isShowPersonalScreen, toggleIsShowPersonalScreen };
}
