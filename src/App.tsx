import { Route, Routes, useNavigate } from "react-router-dom";
import MainContent from "./Components/MainContent/MainContent";
import data from "./data.json";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies] = useState<Movie[]>(data);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <main className="bg-black min-h-lvh min-w-lvw tablet:pt-6 tablet:px-6 desktop:pl-8 desktop:pt-8">
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="/:nav" element={<MainContent movies={movies} />} />
      </Routes>
    </main>
  );
}

export default App;
