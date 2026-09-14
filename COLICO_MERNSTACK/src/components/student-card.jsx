import { Link } from "react-router-dom";


function studentCard({id, name, age, bday, studentNumber, course}) {
    return (
        <div className="bg-blue-200 border border-black-200 rounded-lg p-5 m-5">
            <p className="text-blue-500">Name: {name}</p>
            <p className="text-red-500">Age: {age}</p>
            <p className="text-blue-500">Bday: {bday}</p>
            <p className="text-red-500">studentNumber: {studentNumber}</p>
            <p className="text-gray-500">Course: {course}</p>
            <div className="bg-blue-500 border border-black-500 rounded-lg p-5 flex justify-center gap-20 text-white font-bold">
                <Link to={`/students/${id}`}>View Details</Link>
            </div>
        </div>
    )
}



export default studentCard;