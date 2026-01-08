import React from 'react'
const employees = [
  { name: "Amit", newTask: 1, active: 1, completed: 0, failed: 0 },
  { name: "Priya", newTask: 1, active: 1, completed: 1, failed: 0 },
  { name: "Rohit", newTask: 1, active: 2, completed: 0, failed: 1 },
  { name: "Neha", newTask: 1, active: 2, completed: 0, failed: 0 },
  { name: "Vikram", newTask: 0, active: 2, completed: 1, failed: 0 },
];

const TaskOverviewTable = () => {
  return (
    <div className="bg-purple-100 rounded-2xl p-6 shadow">
      <h3 className="text-xl font-semibold text-purple-800 mb-4">
        Task Overview
      </h3>

      <div className="overflow-x-auto bg-white rounded-xl">
        <table className="w-full text-left">
          <thead className="bg-purple-50">
            <tr>
              <th className="p-3 text-purple-700">Employee Name</th>
              <th className="p-3 text-purple-700">New Task</th>
              <th className="p-3 text-purple-700">Active Task</th>
              <th className="p-3 text-purple-700">Completed</th>
              <th className="p-3 text-purple-700">Failed</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr
                key={index}
                className="border-b last:border-none hover:bg-purple-50"
              >
                <td className="p-3 font-medium text-purple-800">
                  {emp.name}
                </td>
                <td className="p-3">{emp.newTask}</td>
                <td className="p-3">{emp.active}</td>
                <td className="p-3">{emp.completed}</td>
                <td className="p-3">{emp.failed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default TaskOverviewTable