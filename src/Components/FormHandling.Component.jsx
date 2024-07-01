import React, { useState } from 'react'

const FormHandlingComponent = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        //console.log(event);
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("The text that you have written is " + inputValue);
    }

    return (
        <div>
            <h2>Form Handling In React</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="somethingInput">Enter something</label>
                <input
                    type="text"
                    name="somethingInput"
                    id="somethingInput"
                    onChange={handleChange}
                />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default FormHandlingComponent