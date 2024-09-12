import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="flex gap-4 m-20">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
