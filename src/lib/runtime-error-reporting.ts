/**
 * Optional runtime error reporting for production monitoring hooks.
 * Safe no-op when no global reporter is present.
 */
type RuntimeErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type RuntimeEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: RuntimeErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __runtimeEvents?: RuntimeEvents;
  }
}

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.__runtimeEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );

  if (import.meta.env.DEV) {
    const message =
      error instanceof Response
        ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
        : error instanceof Error
          ? error.message
          : String(error);
    console.error("[runtime]", message, context);
  }
}
