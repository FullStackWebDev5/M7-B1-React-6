const Increment = ({ count, setCount }) => {
	const increment = () => {
		setCount(count + 1)
	}
	return (
    <>
      Count: {count}
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default Increment