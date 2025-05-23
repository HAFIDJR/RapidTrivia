export default function SideBar() {
  return (
    <div
      id="sidebar"
      className="w-[270px] flex flex-col shrink-0 min-h-screen justify-between p-[30px] border-r border-[#EEEEEE] bg-[#FBFBFB]"
    >
      <div className="w-full flex flex-col">
        <a href="index.html" className="flex items-center justify-center">
          <img src="assets/images/logo/Trivia.svg" alt="logo" width={120} />
        </a>

        <ul className="flex flex-col gap-3">
          <li>
            <h3 className="font-bold text-xs text-[#A5ABB2]">DAILY USE</h3>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/home-hashtag.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                Overview
              </p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 bg-[#2B82FE] transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/note-favorite.svg" alt="icon" />
              <p className="font-semibold text-white transition-all duration-300 hover:text-white">
                Quiz
              </p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/profile-2user.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                Students
              </p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE] relative"
            >
              <img src="assets/images/icons/sms-tracking.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                Messages
              </p>
              <div className="notif w-5 h-5 flex shrink-0 rounded-full items-center justify-center bg-[#F6770B] absolute right-2">
                <p className="font-bold text-[10px] leading-[15px] text-white">
                  12
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/chart-2.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                Analytics
              </p>
            </a>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li>
            <h3 className="font-bold text-xs text-[#A5ABB2]">OTHERS</h3>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/3dcube.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                Rewards
              </p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/code.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                A.I Plugins
              </p>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/setting-2.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                Settings
              </p>
            </a>
          </li>
          <li>
            <a
              href="signin.html"
              className="p-[10px_16px] flex items-center gap-[14px] rounded-full h-11 transition-all duration-300 hover:bg-[#2B82FE]"
            >
              <img src="assets/images/icons/security-safe.svg" alt="icon" />
              <p className="font-semibold transition-all duration-300 hover:text-white">
                Logout
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
