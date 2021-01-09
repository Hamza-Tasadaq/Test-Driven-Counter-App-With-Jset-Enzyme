import React, { useState } from 'react'
import Counter from './component/Counter'
import './App.css';

function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
