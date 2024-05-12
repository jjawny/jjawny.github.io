import React from "react";

const CameraPositionCtx = React.createContext([0, 0, 0]);

export const CameraPositionCtxProvider = CameraPositionCtx.Provider;
export const CameraPositionCtxConsumer = CameraPositionCtx.Consumer;

export default CameraPositionCtx;
