import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {

    const [message, setMessage] = useState("Hello User");

    useEffect(() => {
        console.log('Component updated');
    }, [message]);

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-semibold text-red-800'>
                useEffect Hook In React
            </h1>
            <p>
                {message}
            </p>
            <button
                className='border border-blue-600 p-2 rounded-lg bg-blue-200'
                onClick={() => setMessage("Hello React")}
            >
                Update Message
            </button>
        </div>
    )
}

export default UseEffectComponent