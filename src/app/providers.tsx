"use client";

import { StrictMode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ClientStoreProvider from "@/core/redux/clientStore";
import ErrorBoundary from "@/core/common-components/common-error-boundary/ErrorBoundary";

function GlobalTooltipInit() {
  const pathname = usePathname();
  const tooltipInstancesRef = useRef<any[]>([]);

  useEffect(() => {
    // Wait for Bootstrap to be available on window (loaded by BootstrapJs component)
    const initTooltips = () => {
      // Check if Bootstrap is available on window
      if (typeof window !== 'undefined' && (window as any).bootstrap) {
        const bootstrap = (window as any).bootstrap;
        
        // Dispose existing tooltip instances to avoid duplicates
        tooltipInstancesRef.current.forEach(({ instance }) => {
          try {
            if (instance && typeof instance.dispose === 'function') {
              instance.dispose();
            }
          } catch (error) {
            // Ignore errors during cleanup
          }
        });
        tooltipInstancesRef.current = [];

        // Also dispose any tooltips that might have been initialized elsewhere
        const existingTooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        existingTooltips.forEach((el) => {
          const tooltipInstance = bootstrap.Tooltip.getInstance(el);
          if (tooltipInstance) {
            tooltipInstance.dispose();
          }
        });

        // Remove any orphaned tooltip DOM elements
        document.querySelectorAll(".tooltip").forEach((el) => el.remove());

        // Initialize new tooltips
        const tooltipTriggerList = Array.from(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
          try {
            // Skip if already has an instance
            if (!bootstrap.Tooltip.getInstance(tooltipTriggerEl)) {
              const instance = new bootstrap.Tooltip(tooltipTriggerEl);
              tooltipInstancesRef.current.push({ element: tooltipTriggerEl, instance });
            }
          } catch (error) {
            console.warn('Failed to initialize tooltip:', error);
          }
        });

        return true; // Successfully initialized
      }
      return false; // Bootstrap not ready
    };

    // Try to initialize immediately
    let initialized = initTooltips();

    // If Bootstrap is not ready, wait for it with a small delay
    if (!initialized) {
      const checkInterval = setInterval(() => {
        initialized = initTooltips();
        if (initialized) {
          clearInterval(checkInterval);
        }
      }, 50);

      // Stop checking after 5 seconds to avoid infinite loop
      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
      }, 5000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
        // Cleanup tooltip instances
        tooltipInstancesRef.current.forEach(({ instance }) => {
          try {
            if (instance && typeof instance.dispose === 'function') {
              instance.dispose();
            }
          } catch (error) {
            // Ignore errors during cleanup
          }
        });
        tooltipInstancesRef.current = [];
        // Remove any remaining tooltip DOM elements
        document.querySelectorAll(".tooltip").forEach((el) => el.remove());
      };
    }

    // Cleanup function
    return () => {
      tooltipInstancesRef.current.forEach(({ instance }) => {
        try {
          if (instance && typeof instance.dispose === 'function') {
            instance.dispose();
          }
        } catch (error) {
          // Ignore errors during cleanup
        }
      });
      tooltipInstancesRef.current = [];
      // Remove any remaining tooltip DOM elements
      document.querySelectorAll(".tooltip").forEach((el) => el.remove());
    };
  }, [pathname]);

  return null;
}

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <ClientStoreProvider>
        <GlobalTooltipInit />
        <ErrorBoundary>{children}</ErrorBoundary>
      </ClientStoreProvider>
    </StrictMode>
  );
}
