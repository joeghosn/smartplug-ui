import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import SchedulesPage from "./pages/SchedulesPages";
import SettingsPage from "./pages/SettingsPage";
import RootLayout from "./components/layouts/RootLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
