import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly text-xl p-5 text-[#2C3E50]">
        <i className="fa-solid fa-a mt-2"></i>
        <ul className="flex gap-8 playfair-display-bold">
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/experience"
          >
            Experience
          </Link>
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/skills"
          >
            Skills
          </Link>
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/interest"
          >
            Interest
          </Link>
          <Link
            className="hover:text-[#F76C6C] hover:underline cursor-pointer"
            to="/awards"
          >
            Awards
          </Link>
        </ul>
        <div className="flex gap-4 mt-2">
          <i className="fa-brands fa-linkedin hover:text-[#F76C6C] hover:underline cursor-pointer"></i>
          <i className="fa-brands fa-github hover:text-[#F76C6C] hover:underline cursor-pointer"></i>
          <i className="fa-brands fa-stack-overflow hover:text-[#F76C6C] hover:underline cursor-pointer"></i>
        </div>
      </nav>
      <hr className="border-b-1 border-black" />
    </>
  );
}
