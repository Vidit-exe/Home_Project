import React from 'react'
import { Link } from 'react-router-dom'
const Click = () => {
    return (

        <>
            <div className='button text-center flex items-center justify-center m-auto relativeh-screen'>
                <button className='p-5 text-2xl font-bold text-white bg-orange-600 border-none outline-none rounded-xl items-center flex hover:transition-all hover:bg-orange-700 absolute top-1/2'>
                    <Link to="/love">Please Click Here!</Link>
                </button>
            </div>
        </>
    )
}

export default Click