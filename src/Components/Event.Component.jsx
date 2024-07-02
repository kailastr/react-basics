import React, { useState } from "react";

import { Link } from "react-router-dom";

const EventComponent = () => {

    const [userName, setUserName] = useState("User");

    const changeUserName = (e) => {
        e.preventDefault();
        const name = document.getElementById("uName").value;
        setUserName(name);
    }

    return (
        <>
            <h2>Event Handling in react</h2>

            <Link to='/home'>
                <p className="text-lg text-blue-600 cursor-pointer inline">Click here to go to State component</p>
            </Link>

            <form onSubmit={changeUserName}>
                <input
                    type="text"
                    name="uName"
                    id="uName"
                    //onChange={(e) => setUserName(e.target.value)}
                    required
                    className="border-2 border-blue-700 rounded-md"
                />
                <input type="submit" value="SUBMIT" />
            </form>

            <p>
                Hey {userName}, Welcome to our page..
            </p>
        </>
    )
};

export default EventComponent;