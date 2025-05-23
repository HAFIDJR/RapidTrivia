import { Outlet } from "react-router";
import HeaderLayout from "./HeaderLayout";
import SideBar from "./SideBar";

const LayoutContent: React.FC = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col flex-1">
        <HeaderLayout />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return <LayoutContent />;
};

export default AppLayout;
