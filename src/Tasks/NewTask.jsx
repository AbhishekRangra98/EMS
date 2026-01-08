import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'

const NewTask = ({data, firstname}) =>{

    const [userData, setUserData ] = useContext(AuthContext)

    const user = userData.find(user => user.firstname === firstname)

    const acceptTask = () => {
        const updatedUserTasks = user.tasks.map(task => {
            if (task.title === data.title) {
                console.log(user.tasks)
                return {
                    ...task,
                    new_task: false,
                    active: true                    
                }
            }
            return task
        })

        user.tasks = updatedUserTasks
        setUserData(userData)
        localStorage.setItem('employees', JSON.stringify(userData))
        
    }

    return(
        <div className='flex-shrink-0 h-full w-[300px] p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-200'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-blue-600 text-white text-sm px-3 py-1 rounded-lg font-medium'>{data.category}</h3>
                <h4 className='text-sm text-indigo-800 font-medium'>{data.date}</h4>
            </div>

            <h2 className='text-xl font-semibold text-indigo-900 mb-3'>{data.title}</h2>
            <p className='text-sm text-indigo-800 mb-6 line-clamp-3'>
                {data.description}
            </p>
            <div className='mt-auto'>
                <button onClick={acceptTask} className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask