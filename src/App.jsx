import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import User from "./pages/Users";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="account" element={<Account />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="login" element={<Login />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="users" element={<User />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;