import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useHandleGitHubPagesRoutes } from "~/features/shared/hooks/useHandleGitHubPagesRoutes";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({ routeTree });

// Type-safety gains for the router
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  useHandleGitHubPagesRoutes();

  return <RouterProvider router={router} />;
}
