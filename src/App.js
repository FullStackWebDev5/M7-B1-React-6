import { useState } from 'react'
import './App.css';
import Increment from './components/Increment'
import Decrement from './components/Decrement';

function App() {
	const [count, setCount] = useState(0)
  return (
    <div className="App">
			<Increment count={count} setCount={setCount} />
			<Decrement count={count} setCount={setCount} />
    </div>
  );
}

export default App;

/*
	1. Components which do not require state also will have to keep/pass that state
	2. Lift the state upto the common parent and then drill the props until the required child component

	Lifting the state up / Props drilling
*/
