import "../style/font.css";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly text-xl p-5 text-[#2C3E50]">
        <i className="fa-solid fa-a mt-2"></i>
        <ul className="flex gap-8 playfair-display-bold">
          <li className="hover:text-[#F76C6C] hover:underline hover:decoration-solid cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#F76C6C] hover:underline cursor-pointer">
            About
          </li>
          <li className="hover:text-[#F76C6C] hover:underline cursor-pointer">
            Experience
          </li>
          <li className="hover:text-[#F76C6C] hover:underline cursor-pointer">
            Skills
          </li>
          <li className="hover:text-[#F76C6C] hover:underline cursor-pointer">
            Interest
          </li>
          <li className="hover:text-[#F76C6C] hover:underline cursor-pointer">
            Awards
          </li>
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
