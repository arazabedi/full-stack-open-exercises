const Anecdote = (props) => {
  const {anecdotes, selected} = props;

  return (
    <>
      {anecdotes[selected]}
    </>
  );
}

export default Anecdote;
