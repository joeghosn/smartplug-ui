import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="">
      <main className="">
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
