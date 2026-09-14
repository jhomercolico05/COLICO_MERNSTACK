import StudentCard from "./components/student-card.jsx";
import SubjectCard from "./components/subject.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import StudentDetails from "./pages/StudentsDetails.jsx";
import Navbar from "./components/Navbar.jsx";

function App(){
  return (

    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/students" element={<Students/>}></Route>
            <Route path="/students/:id" element={<StudentDetails/>}></Route>
        
        </Routes>
        </BrowserRouter>
    
  );
}

export default App