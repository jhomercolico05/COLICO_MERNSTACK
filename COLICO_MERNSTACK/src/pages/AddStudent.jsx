import { useState } from "react";
import studentData from "../data/students.json";


export default function AddStudent(){
   
   const [name, setName] = useState("");
   const [studentNumber, setStudentNumber] = useState("");
   const [courseDescription, setCourseDescription] = useState("");
   const [sex, setSex] = useState("");  
   const [students, setStudents] = useState(studentData);
   
   
    return(
        <div className="flex flex-col justify-center items-center ">
            <h1 className="font-bold text-3xl text-center p-10 bg-blue-300 m-10 rounded-2xl">Add Student Page</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                const newStudent = {
                    id: students.length + 1,
                    name: name,
                    studentNumber: studentNumber,
                    courseDescription: courseDescription,
                    sex: sex
                };
                setStudents([...students, newStudent]);
                setName("");
                setStudentNumber("");
                setCourseDescription("");
                setSex("");
            }} className="flex flex-col border border-black-200 rounded-lg p-10 items-center text-center w-1/2">
                <label className="font-bold text-2xl">Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter Name" className="border border-black-200 rounded-lg m-5 p-2 w-1/2"/>    

                <label className="font-bold text-2xl">Student Number:</label>
                <input type="number" name="studentNumber" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)} placeholder="Enter Student Number" required className="border border-black-200 rounded-lg m-5 p-2 w-1/2"/>

                <label className="font-bold text-2xl">Course Description:</label>
                <input type="text" name="courseDescription" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} required placeholder="Enter Course Description" className="border border-black-200 rounded-lg m-5 p-2 w-1/2"/>

                <label className="font-bold text-2xl">Sex:</label>
                <select name="sex" value={sex} onChange={(e) => setSex(e.target.value)} required className="border border-black-200 rounded-lg m-5 p-2 w-1/2">
                    <option value="">Select Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <button type="submit" className="bg-blue-500 border border-black-500 rounded-lg p-5 flex justify-center gap-20 text-white font-bold">Add Student</button>

            </form>
            {students.map((student) => (
                <div key={student.id} className="rounded-lg p-5 m-5 bg-gray-300 max-w-sm mx-auto">
                    <h2 className="font-bold text-xl">{student.name}</h2>
                    <p className="text-blue">Student Number: {student.studentNumber}</p>
                    <p>Course Description: {student.courseDescription}</p>
                    <p>Sex: {student.sex}</p>
                </div>
            ))}
        </div>

        




    );
}