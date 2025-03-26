"use client"

import React from "react";
import { QueryProvider } from "./QueryProvider";
import { Toaster } from "sonner";
import ScreenSizeWidget from "../_components/ScreenSizeWidget";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      {children}
      <Toaster position="top-left"
        toastOptions={{
          style: {
            fontSize: '1.2rem',
            backgroundColor: 'var(--color-accent-600)',
            border: '2px solid var(--color-primary-50)',
            color: 'var(--color-primary-50)',
          }
        }}
      />
      <ScreenSizeWidget position="top left" />
    </QueryProvider>
  );
}
