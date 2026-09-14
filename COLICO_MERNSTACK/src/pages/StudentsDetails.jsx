import students from "../data/students.json";
import { useParams, Link} from "react-router-dom";


export default function StudentsDetails(){
   const { id } = useParams();

   const student = students.find((student) => student.id === parseInt(id));


  return(
        <div className="bg-blue-200 border border-black-200 rounded-lg m-10 p-5 items-center text-center">
            <h1 className="font-bold text-3xl">Student Details</h1>
            <p className="font-bold">Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <div className="bg-blue-500 border border-black-500 rounded-lg p-5 flex justify-center gap-20 text-white">
                    <Link to="/students">Back to Students</Link>
                </div>
        </div>
 );

};




