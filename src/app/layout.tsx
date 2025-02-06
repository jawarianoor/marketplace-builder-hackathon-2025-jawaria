import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Furniro | Furniture Website",
  description:
    "This is a Furniture Website Furniro created with Next.js, Tailwind CSS, and custom CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <head>
          <title>My App</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </head>
        <body className={`${lato.className} antialiased`}>
          <SessionProvider>
            <Toaster />
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            <LayoutWrapper>{children}</LayoutWrapper>
          </SessionProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
