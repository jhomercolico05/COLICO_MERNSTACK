import students from "../data/students.json";
import StudentCards from "../components/StudentCard.jsx";
import { useState } from "react";
import AddStudent from "./AddStudent.jsx";


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