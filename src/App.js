import "./App.css";
import {Route,Routes} from "react-router-dom";
import Mockman from "mockman-js";
import {Home} from "./Pages/Home/Home";
function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mockman />} />
        </Routes>
    </>
  );
}

export default App;
