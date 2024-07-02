import React, { useState } from "react";

const StateComponent = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div style={{ borderRadius: 10, backgroundColor: "yellow", padding: 10, margin: 10 }}>
                <h2>State Component</h2>

                <button
                    onClick={() => setCount(count + 1)}
                    className="border border-red-700 rounded-md p-3 bg-red-200 m-2"
                >
                    Click here to increase count
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="border border-red-700 rounded-md p-3 bg-red-200 m-2"
                >
                    Click here to decrease count
                </button>

                <p>
                    {count}
                </p>
            </div>
        </>
    )
};

export default StateComponent; 