import { Routes, Route } from "react-router-dom";

import DashboardPage from "./features/dashboard/page";
import SettingsPage from "./features/settings/page";
import SchedulesPage from "./features/schedules/page";
import Root from "./components/layouts/root";

export default function App() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
