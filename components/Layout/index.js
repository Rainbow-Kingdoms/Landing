import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className="bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
