import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import LoginPage from "./Pages/Loginpage";
import RegisterPage from "./Pages/Registerpage";
import ProfilePage from "./Pages/Profilepage";
import NavBar from "./Components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token === null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [isAuth, navigate]);

  return (
    <>
      {isAuth && <NavBar />}
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;