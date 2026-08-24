import StudentCard from "./components/student-card.jsx";
import SubjectCard from "./components/subject.jsx";

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

      <SubjectCard
        schedCode={202401111}
        subjectName="DCIT26 App Dev"
        classSchedule={20001234}
      />

      <SubjectCard
        schedCode={202402222}
        subjectName="DCIT26 App Dev 123"
        classSchedule={200054321}
      />
    </div>

    
  );
}

export default App