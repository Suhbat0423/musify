import React from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 px-6  text-white">
      <input
        type="text"
        placeholder="Search For Musics, Artists, ..."
        className="w-1/3 h-10 px-4 rounded bg-[#2B2B2B] text-white placeholder-gray-400 focus:outline-none"
      />

      {/* Navigation + Auth Buttons */}
      <div className="w-full flex justify-around items-center">
        <a
          href="#"
          className="hover:text-[#EE10B0] transition text-md font-bold"
        >
          About us
        </a>
        <a
          href="#"
          className="hover:text-[#EE10B0] transition text-md font-bold"
        >
          Content
        </a>
        <a
          href="#"
          className="hover:text-[#EE10B0] transition text-md font-bold"
        >
          Premium
        </a>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4 ml-4">
          <a
            href="login"
            className="hover:text-white bg-transparent border border-[#EE10B0] px-4 py-2 rounded-sm transition w-[220px] text-center "
          >
            Login
          </a>
          <a
            href="register"
            className="hover:text-white bg-[#EE10B0] px-4 py-2 rounded-sm transition w-[220px] text-center"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
