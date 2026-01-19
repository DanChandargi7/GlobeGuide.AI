import { useState } from "react";
import { CircleUser, CreditCard, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  return (
    <nav className=" fixed top-0 left-0 w-full bg-transparent flex items-center justify-between z-[100] px-8 py-6 font-body">
      <Link to="/" className=" font-heading text-3xl  text-white font-bold">
        GlobeGuide<span className="text-fuchsia-500">.AI</span>
      </Link>

      <ul className=" flex gap-4 md:flex gap-6 text-white font-bold text-sm md:text-lg lg:text-xl font-heading">
        <Link to="/explore">
          <li className="hover:text-blue-400 cursor-pointer">Explore</li>
        </Link>
        <Link to="/pricing">
          <li className="hover:text-blue-400 cursor-pointer">Pricing</li>
        </Link>
      </ul>
      {login && (
        <div className="relative group flex items-center ">
          <div className="p-1 hover:bg-white/10 rounded-full transition-all cursor-pointer">
            <CircleUser
              color="white"
              size={28}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>

          <div className="absolute right-0 top-full pt-2 w-48 hidden group-hover:block animate-in zoom-in-95 duration-200">
            <div
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
            rounded-2xl overflow-hidden py-2 text-white"
            >
              <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-black text-sm font-medium transition">
                <User size={16} className="text-blue-600" /> View Profile
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 hover:text-black text-sm font-medium transition">
                <CreditCard size={16} className="text-blue-600" /> Billings
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50  hover:text-black text-sm font-medium transition">
                <Settings size={16} className="text-blue-600" /> Settings
              </button>
            </div>
          </div>
        </div>
      )}
      {!login && (
        <button
          className="text-white border-2 rounded-4xl py-2 px-3 hover:text-black hover:bg-white hover:border-white font-heading "
          onClick={() => {
            setLogin(true);
          }}
        >
          SIGN IN
        </button>
      )}
    </nav>
  );
};

export default Navbar;
