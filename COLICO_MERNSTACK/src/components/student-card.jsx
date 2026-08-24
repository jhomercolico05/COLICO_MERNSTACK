
function studentCard({name, age, bday, studentNumber, course}) {
    return (
        <div className="bg-blue-200 border border-black-200 rounded-lg p-5 m-5">
            <p className="text-blue-500">Name: {name}</p>
            <p className="text-red-500">Age: {age}</p>
            <p className="text-blue-500">Bday: {bday}</p>
            <p className="text-red-500">studentNumber: {studentNumber}</p>
            <p className="text-gray-500">Course: {course}</p>



        </div>
    )
}



export default studentCard;