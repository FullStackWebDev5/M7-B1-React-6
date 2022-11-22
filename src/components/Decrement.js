const Decrement = ({ count, setCount }) => {
  const decrement = () => {
		setCount(count - 1)
	};
  return <button onClick={decrement}>Decrement</button>;
};

export default Decrement;
