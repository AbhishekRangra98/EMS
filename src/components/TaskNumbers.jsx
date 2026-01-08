import React from 'react';

const TaskNumbers = ({data}) => {
    return(
        <div className='p-6'>
            <h2 className='text-2xl font-semibold text-indigo-900 mb-6'>Task Overview</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]'>
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-5xl font-bold text-blue-600 mb-2'>{data.task_numbers.new_task}</h2>
                        <h3 className='text-lg font-medium text-indigo-800'>New Tasks</h3>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]'>
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-5xl font-bold text-purple-600 mb-2'>{data.task_numbers.active}</h2>
                        <h3 className='text-lg font-medium text-indigo-800'>Active Tasks</h3>
                    </div>
                </div>

                <div className='bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]'>
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-5xl font-bold text-emerald-600 mb-2'>{data.task_numbers.completed}</h2>
                        <h3 className='text-lg font-medium text-indigo-800'>Completed</h3>
                    </div>
                </div>
                
                <div className='bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]'>
                    <div className='flex flex-col items-center text-center'>
                        <h2 className='text-5xl font-bold text-rose-600 mb-2'>{data.task_numbers.failed}</h2>
                        <h3 className='text-lg font-medium text-indigo-800'>Failed</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskNumbers