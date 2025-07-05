import { useEffect } from "react";

/**
 * Syncs the current background color w the meta theme-color tag (for overflowing color into safari bar etc)
 */
export function useSyncMetaColor() {
  useEffect(() => {
    const sync = () => {
      const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--background-color").trim();

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", backgroundColor);
      }
    };

    // Sync on mount
    sync();

    // Sync when theme changes (for theme switching)
    const observer = new MutationObserver(() => sync());

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["theme"],
    });

    return () => observer.disconnect();
  }, []);
}
