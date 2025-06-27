import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// Type-safety gains for the router
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
