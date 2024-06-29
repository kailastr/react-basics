import React, { useState } from "react";

const StateComponent = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <div style={{ borderRadius: 10, backgroundColor: "yellow", padding: 10, margin: 10 }}>
                <h2>State Component</h2>

                <button onClick={() => setCount(count + 1)}>Click here to increase count</button>
                <button onClick={() => setCount(count - 1)}>Click here to decrease count</button>

                <p>
                    {count}
                </p>
            </div>
        </>
    )
};

export default StateComponent; 