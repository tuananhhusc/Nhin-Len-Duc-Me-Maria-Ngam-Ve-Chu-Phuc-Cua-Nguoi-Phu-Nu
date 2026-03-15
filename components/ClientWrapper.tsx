"use client";

import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
