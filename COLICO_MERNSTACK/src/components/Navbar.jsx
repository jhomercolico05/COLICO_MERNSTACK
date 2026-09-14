import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="bg-blue-500 p-4 flex justify-center gap-20 text-white font-bold text-2xl p-10">
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
        </div>
    );
}