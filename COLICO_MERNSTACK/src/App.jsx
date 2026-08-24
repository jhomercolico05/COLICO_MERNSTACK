import StudentCard from "./components/student-card.jsx";


function App(){
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify center">
      <StudentCard 
        name = "Jhomer Colico"
        age = {21}
        bday = "July 13, 2005"
        studentNumber = {202405742}
        course = "BSIT"
      />

    </div>
  );
}

export default App