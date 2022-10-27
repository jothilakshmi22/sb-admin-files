import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Colors from "./components/Colors";
import Borders from "./components/Border";
import Blank from "./components/Blackpg";
import Unavailable from "./components/Unavailable";
import Login from "./components/Login";
import Forgotpassword from "./components/ForgetPwd";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        gridTemplateColumns: "15% 85%",
        gridColumnGap: "20px",
      }}
    >
      {/* 
      // <Sidebar />
      <ColorSystem /> */}
      <BrowserRouter>
        <Navbar />
        <Routes style={{ marginLeft: "40px" }}>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/borders" element={<Borders />} />
          <Route path="/blank" element={<Blank />} />

          <Route path="/404" element={<Unavailable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
