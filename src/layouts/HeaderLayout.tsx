export default function HeaderLayout() {
  return (
    <div id="menu-content" className="flex flex-col w-full pb-[10px]">
      <div className="nav flex justify-between p-5 border-b border-[#EEEEEE]">
        <form className="search flex items-center w-[400px] h-[52px] p-[10px_16px] rounded-full border border-[#EEEEEE]">
          <input
            type="text"
            className="font-semibold placeholder:text-[#7F8190] placeholder:font-normal w-full outline-none"
            placeholder="Search by report, student, etc"
            name="search"
          />
          <button
            type="submit"
            className="ml-[10px] w-8 h-8 flex items-center justify-center"
          >
            <img src="assets/images/icons/search.svg" alt="icon" />
          </button>
        </form>
        <div className="flex items-center gap-[30px]">
          <div className="flex gap-[14px]">
            <a
              href="#"
              className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-full border border-[#EEEEEE]"
            >
              <img src="assets/images/icons/receipt-text.svg" alt="icon" />
            </a>
            <a
              href="#"
              className="w-[46px] h-[46px] flex shrink-0 items-center justify-center rounded-full border border-[#EEEEEE]"
            >
              <img src="assets/images/icons/notification.svg" alt="icon" />
            </a>
          </div>
          <div className="h-[46px] w-[1px] flex shrink-0 border border-[#EEEEEE]"></div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col text-right">
              <p className="text-sm text-[#7F8190]">Howdy</p>
              <p className="font-semibold">Fany Alqo</p>
            </div>
            <div className="w-[46px] h-[46px]">
              <img src="assets/images/photos/default-photo.svg" alt="photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
