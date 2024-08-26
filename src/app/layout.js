import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"
  },
  description: "Our Next-Hero Web Application For You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>

        <NavBar></NavBar>

        <div className="min-h-[calc(100vh-184px)] bg-slate-50 text-slate-900">
          {children}
        </div>

        <footer className="bg-slate-900 text-slate-200 py-10 text-2xl">
          <h2 className="text-center">This is footer</h2>
        </footer>

      </body>
    </html>
  );
}
