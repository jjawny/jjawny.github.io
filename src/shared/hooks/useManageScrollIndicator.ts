import { useSceneStateStore } from "~/shared/hooks/useSceneStateStore";

export const useManageScrollIndicator = () => {
  const isShowScrollIndicator = useSceneStateStore((state) => state.sceneState.isShowScrollIndicator);
  const setSceneState = useSceneStateStore((state) => state.setSceneState);
  const toggleIsShowScrollIndicator = (isShow: boolean) => setSceneState("isShowScrollIndicator", isShow);

  return { isShowScrollIndicator, toggleIsShowScrollIndicator };
};
