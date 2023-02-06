const Button = (props) => {
  const {handler} = props;

  return (
    <>
    <button onClick={handler}>next anecdote</button>
    </>
  );
}

export default Button;
