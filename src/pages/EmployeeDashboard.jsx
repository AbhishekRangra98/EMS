import React from "react";
import Header from "../components/Header";
import TaskNumbers from "../components/TaskNumbers";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = (props) => {
  return (  

        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6">
                    <Header changeUser={props.changeUser} data={props.data}/>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                    <TaskNumbers data={props.data}/>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                    <TaskList data={props.data}/>
                </div>
            </div>
        </div>
    )
}


export default EmployeeDashboard