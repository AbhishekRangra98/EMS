import React from 'react';
import ActiveTask from './ActiveTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
    // Group tasks by their status
    const firstname = data.firstname
    const newTasks = data.tasks.filter(task => task.new_task);
    const activeTasks = data.tasks.filter(task => task.active);
    const completedTasks = data.tasks.filter(task => task.completed);
    const failedTasks = data.tasks.filter(task => task.failed);
    
    return (
        <div id='TaskList' className='w-full space-y-8 p-6'>
            {newTasks.length > 0 && (
                <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-2xl font-semibold text-blue-600'>New Tasks</h2>
                        <span className='text-sm text-blue-500 bg-blue-50 px-3 py-1 rounded-full'>
                            {newTasks.length} tasks
                        </span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {newTasks.map((task, idx) => (
                            <NewTask key={idx} data={task} firstname={firstname} />
                        ))}
                    </div>
                </div>
            )}

            {/* Active Tasks Section */}
            {activeTasks.length > 0 && (
                <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-2xl font-semibold text-purple-600'>Active Tasks</h2>
                        <span className='text-sm text-purple-500 bg-purple-50 px-3 py-1 rounded-full'>
                            {activeTasks.length} tasks
                        </span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {activeTasks.map((task, idx) => (
                            <ActiveTask key={idx} data={task} />
                        ))}
                    </div>
                </div>
            )}

            {/* Completed Tasks Section */}
            {completedTasks.length > 0 && (
                <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-2xl font-semibold text-emerald-600'>Completed Tasks</h2>
                        <span className='text-sm text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full'>
                            {completedTasks.length} tasks
                        </span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {completedTasks.map((task, idx) => (
                            <CompleteTask key={idx} data={task} />
                        ))}
                    </div>
                </div>
            )}

            {/* Failed Tasks Section */}
            {failedTasks.length > 0 && (
                <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-2xl font-semibold text-rose-600'>Failed Tasks</h2>
                        <span className='text-sm text-rose-500 bg-rose-50 px-3 py-1 rounded-full'>
                            {failedTasks.length} tasks
                        </span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {failedTasks.map((task, idx) => (
                            <FailedTask key={idx} data={task} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TaskList