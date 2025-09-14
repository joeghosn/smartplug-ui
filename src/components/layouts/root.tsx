import { Outlet } from "react-router-dom";
import { Toaster } from "../ui/sonner";

export default function Root() {
  return (
    <div className="">
      <main className="">
        <div className="">
          <Outlet />
        </div>
      </main>
      <Toaster />
    </div>
  );
}
