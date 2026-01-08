import React from 'react';

const FailedTask = ({data}) =>{
    return(
        <div className='flex-shrink-0 h-full w-[300px] p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-200'>
            <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-purple-600 text-white text-sm px-3 py-1 rounded-lg font-medium'>{data.category}</h3>
                <h4 className='text-sm text-indigo-800 font-medium'>{data.date}</h4>
            </div>

            <h2 className='text-xl font-semibold text-indigo-900 mb-3'>{data.title}</h2>
            <p className='text-sm text-indigo-800 mb-6 line-clamp-3'>
                {data.description}
            </p>
            <div className='mt-auto'>
                <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask