import CustomHeader from "@/components/layout/CustomHeader";
import type { Metadata } from "next";
import "@/styles/global.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";

export const metadata: Metadata = {
  title: "To-Do List AgRoss",
  description: "To-Do List AgRoss feita com React.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ThemeProvider theme={theme}>
        <body>
          <CustomHeader />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
