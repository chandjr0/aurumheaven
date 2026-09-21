import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Subtle page-enter transition + thin top progress indicator on navigation.
 * Respects prefers-reduced-motion via CSS.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const status = useRouterState({ select: (s) => s.status });
  const [visible, setVisible] = useState(true);
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => {
      setKey(pathname);
      setVisible(true);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const navigating = status === "pending";

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gold transition-transform duration-500 ease-editorial",
          navigating ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0",
        )}
      />
      <div
        key={key}
        className={cn(
          "page-enter min-w-0 max-w-full overflow-x-clip",
          visible ? "page-enter-active" : "page-enter-pending",
        )}
      >
        {children}
      </div>
    </>
  );
}
