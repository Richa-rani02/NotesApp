import "./App.css";
import {Route,Routes} from "react-router-dom";
import Mockman from "mockman-js";
import {Home,NotesPage} from "./Pages/index";

function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/mock" element={<Mockman />} />
        </Routes>
    </>
    
  );
}

export default App;
