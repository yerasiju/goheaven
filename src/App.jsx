import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Destinations from "./pages/Destinations/Destinations.jsx";
import Planner from "./pages/Planner/Planner.jsx";
import DetailsOfDestination from "./components/Details/DetailsOfDestination.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SIgnup/SignUp.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DetailsOfDestination />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginn" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
