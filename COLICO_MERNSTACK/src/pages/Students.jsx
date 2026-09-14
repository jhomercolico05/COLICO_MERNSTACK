import students from "../data/students.json";
import StudentCards from "../components/StudentCard.jsx";

export default function Students(){
    return(   
            <div> 
                {students.map((student) => (
                   <StudentCards 
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        age={student.age}
                        course={student.course}
                        />
                ))};
            </div>
    );
}