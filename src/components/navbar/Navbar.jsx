import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const navigation = [
    { title: "Home" },
    { title: "Shoes" },
    { title: "Contact Us" },
    { title: "About Us" },
  ];

  return (
    <nav className="w-full px-[150px]">
      <div className="flex justify-between items-center pt-[30px] pr-4">

        <a href="/" className="flex items-end gap-2 w-[165px] h-[90px]">
          <h1 className="text-[27px] font-[900] text-[#cf9c5d] uppercase micro">
            Umar
          </h1>
          <span className="logo">
            <img
              src={logo}
              alt=""
              width={59}
              height={59}
              className="ml-[18px]"
            />
            <h1 className="text-[27px] font-[900] text-[#cf9c5d] uppercase shoe">
              Test
            </h1>
          </span>
        </a>

        <div className="flex space-x-[80px]">
          <ul className="flex justify-center items-center space-x-[80px]">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="  text-[#fff]  text-[15px] font-medium uppercase font-Poppins"
                >
                  <a href="">{item.title}</a>
                </li>
              );
            })}
          </ul>

          <div className="rounded-[48px]  flex justify-between px-2 items-center">
            <Link to="/getstarted">
              <button className="w-[180px] h-[60px] text-white bg-[#CF9C5D] rounded-full px-4 py-1 text-sm font-medium">
                Get Started
              </button>
            </Link>
          </div>


        </div>

      </div>
    </nav>
  );
}
