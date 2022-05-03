import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateOutlet from "./PrivateOutlet";
//PageLists
import IndexPage from "pages/index";
import NotFoundPage from "pages/notfound";
import Dashboard from "pages/dashboard";
import Profile from "pages/profile";
import Login from "pages/login";

function Routess() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", setupScreen);
    return () => window.removeEventListener("resize", setupScreen);
  }, []);

  const setupScreen = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
