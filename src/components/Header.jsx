import React, { useState } from 'react';
import { setlocalStorage } from '../utils/LocalStorage'

const Header =(props) =>{

    const data = {props}
    var userName = ''    
    
    if (!data.props.data){
        userName = 'Admin'
    }else {
        userName = data.props.data.firstname
    }
    
    const logOutUser = () => {
        userName = ''
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
    }

    return(
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-2xl font-medium text-indigo-800'>Hello</h1>
                <span className='text-3xl font-semibold text-indigo-900'>{userName} 👋</span>
            </div>
            <button 
                onClick={logOutUser} 
                className='bg-purple-600 hover:bg-purple-700 text-lg font-medium text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200'
            >
                Log Out
            </button>
        </div>
    )
}

export default Header