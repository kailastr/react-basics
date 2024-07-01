import React, { useState } from "react";

const CondtionalComponent = () => {

    //const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const isUserLoggedIn = false;

    //--------------------------condition checking using if else statement
    // let message;
    // if (isUserLoggedIn) {
    //     (
    //         message = <h3>The user is Logged in </h3>
    //     )
    // }
    // else {
    //     (
    //         message = <h3>The user is not Logged In</h3>
    //     )
    // }

    return (
        <div style={{ padding: 10 }}>
            <h2>Conditonal Rendering in React</h2>
            {/* {message} */}

            {/* --------------------------------------- conditional statement using ternary operator
            {
                isUserLoggedIn ?
                    (
                        <h3>The user is logged In</h3>
                    ) :
                    (
                        <h3>The user is not logged In</h3>
                    )
            } */}


            {/* conditonal statement in react using AND operator */}
            {isUserLoggedIn && <h3>The user is logged in</h3>}
            {!isUserLoggedIn && <h3>The user is not Logged In</h3>}

        </div>
    )

}

export default CondtionalComponent;