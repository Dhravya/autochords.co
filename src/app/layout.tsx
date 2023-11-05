import "~/styles/globals.css";

import { Darker_Grotesque } from "next/font/google";
import Provider from "~/components/Provider";

const grot = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-grot",  
});

export const metadata = { 
  title: "Autochords",
  description: "Get chords in your voice for any song",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">         
      <body className={`font-grot bg-[#121729] text-slate-300 ${grot.className}`}>
        <Provider>  
          {children}
        </Provider>
      </body>
    </html>
  );
}
