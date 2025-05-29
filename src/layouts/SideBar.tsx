import { useState } from "react";
import { Link } from "react-router";

export default function SideBar() {
  const [active, setActive] = useState("Quiz"); // default active item

  const menuItems = [
    { label: "Overview", icon: "home-hashtag.svg", link: "/" },
    { label: "Quiz", icon: "note-favorite.svg", link: "/quiz" },
    { label: "Students", icon: "profile-2user.svg", link: "/student" },
    { label: "Analytics", icon: "chart-2.svg", link: "/analytics" },
  ];

  return (
    <div
      id="sidebar"
      className="w-[270px] flex flex-col shrink-0 min-h-screen justify-between p-[30px] border-r border-[#EEEEEE] bg-[#FBFBFB]"
    >
      <div className="w-full flex flex-col">
        <a href="index.html" className="flex items-center justify-center mb-6">
          <img src="assets/images/logo/Trivia.svg" alt="logo" width={120} />
        </a>

        <ul className="flex flex-col gap-3">
          <li>
            <h3 className="font-bold text-xs text-[#A5ABB2]">DAILY USE</h3>
          </li>
          {menuItems.map(({ label, icon, link }) => {
            const isActive = active === label;
            return (
              <li key={label}>
                <Link to={link}>
                  <button
                    onClick={() => setActive(label)}
                    className={`p-[10px_16px] w-full flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 ${
                      isActive ? "bg-[#2B82FE]" : "hover:bg-[#2B82FE]"
                    } relative`}
                  >
                    <img src={`assets/images/icons/${icon}`} alt="icon" />
                    <p
                      className={`font-semibold transition-all duration-300 ${
                        isActive ? "text-white" : "hover:text-white"
                      }`}
                    >
                      {label}
                    </p>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
