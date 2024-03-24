import { Outlet } from "react-router-dom";

import Header from "./Header";

function AppLayout() {
  return (
    <div className="app-layout   bg-primary text-white">
      {/* <Header /> */}

      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
