import useSceneStateStore from "~/features/shared/hooks/useSceneStateStore";

export default function useManageScrollIndicator() {
  const isShowScrollIndicator = useSceneStateStore((state) => state.sceneState.isShowScrollIndicator);
  const setSceneState = useSceneStateStore((state) => state.setSceneState);
  const toggleIsShowScrollIndicator = (isShow: boolean) => setSceneState("isShowScrollIndicator", isShow);

  return { isShowScrollIndicator, toggleIsShowScrollIndicator };
}
