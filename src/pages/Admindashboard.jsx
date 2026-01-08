import React from 'react'
import Header from "../components/Header";
import CreateTaskForm from "../components/CreateTaskForm";
import TaskOverviewTable from "../components/TaskOverviewTable";

const Admindashboard = (props) => {


  return ( 
  <div className='min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 p-8'>
            <div className='max-w-7xl mx-auto space-y-8'>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6'>
                    <Header changeUser={props.changeUser} />
                </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CreateTaskForm />
          <TaskOverviewTable />
        </div>

      </div>
    </div>
  );
}



export default Admindashboard