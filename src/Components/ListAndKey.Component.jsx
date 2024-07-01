import React from 'react'

const ListAndKeyComponent = () => {

    const names = ["Ajay", "Krishna", "Kishor", "Alex"];

    return (
        <div>
            <h2>ListAndKey Component</h2>
            {/* <ul>
                <li>{names[0]}</li>
                <li>{names[1]}</li>
                <li>{names[2]}</li>
                <li>{names[3]}</li>
            </ul> */}
            <ul>
                {names.map((stdName, index) => (
                    <li key={index}>{stdName}</li>
                ))} 
            </ul>
        </div>
    )
}

export default ListAndKeyComponent;