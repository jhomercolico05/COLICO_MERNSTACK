function subjectCard({schedCode, subjectName, classSchedule}) {
    return (
        <div className="bg-orange-200 border border-black-200 rounded-lg p-10 m-20">
            <p className="text-green-500">Sched Code: {schedCode}</p>
            <p className="text-yellow-500">Subject Name: {subjectName}</p>
            <p className="text-green-500">Class Schedule: {classSchedule}</p>

        </div>
    )
}

export default subjectCard;