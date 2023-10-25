import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Prvider from "@/my-redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Prvider>
          <Navbar />
          <ToastContainer />
          {children}
        </Prvider>
      </body>
    </html>
  );
}
