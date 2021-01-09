import React, { useState } from 'react'

function App() {
    const [counter, setcounter] = useState(0)
    return (
        <>
            <h1>This is Counter App</h1>
            <div id="counter-value">{counter}</div>
            <button id='increment-btn' onClick={() => setcounter(counter + 1)}>Increment</button>
            <button id='decrement-btn' onClick={() => setcounter(counter - 1)}>Decrement</button>
        </>
    );
}

export default App;
