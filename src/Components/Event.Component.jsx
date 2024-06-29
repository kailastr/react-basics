import React, { useState } from "react";

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

            <form onSubmit={changeUserName}>
                <input
                    type="text"
                    name="uName"
                    id="uName"
                    //onChange={(e) => setUserName(e.target.value)}
                    required
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