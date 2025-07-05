import { useEffect } from "react";
import { router } from "~/App";

/**
 * GH pages x TanStack Router workaround
 * Expects 404.html to redirect route w extra query params
 */
export function useHandleGitHubPagesRoutes() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get("redirect");

    if (redirect) {
      // Clean the URL and navigate to the actual route
      window.history.replaceState({}, "", window.location.pathname);
      router.navigate({ to: redirect });
    }
  }, []);
}
