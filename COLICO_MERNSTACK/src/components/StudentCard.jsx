import { Link } from "react-router-dom";

export default function StudentCard({id, name, age, course}){
    return(
        <div className="flex justify-center flex-row">
            <div className="bg-gray-300 border border-black-200 rounded-lg p-5 m-10">
                <p className="font-bold text-2xl text-center">Name: {name}</p>
                <p className="text-center">Age: {age}</p>
                <p className="text-center">Course: {course}</p>

                <div className="bg-blue-500 border border-black-500 rounded-lg p-5 flex justify-center gap-20 text-white">
                    <Link to={`/students/${id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
}