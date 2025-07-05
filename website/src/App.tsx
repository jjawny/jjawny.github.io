import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// Type-safety gains for the router
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  useEffect(() => {
    // Handle GitHub Pages redirect from 404.html
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get("redirect");

    if (redirect) {
      // Clean the URL and navigate to the intended route
      window.history.replaceState({}, "", window.location.pathname);
      router.navigate({ to: redirect });
    }
  }, []);

  return <RouterProvider router={router} />;
}
