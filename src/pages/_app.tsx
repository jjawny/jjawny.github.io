import { type AppType } from "next/dist/shared/lib/utils";
import { CameraPositionCtxProvider } from "~/state/CameraPositionContext";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CameraPositionCtxProvider value={[0, 0, 35]}>
      <Component {...pageProps} />
    </CameraPositionCtxProvider>
  );
};

export default MyApp;
