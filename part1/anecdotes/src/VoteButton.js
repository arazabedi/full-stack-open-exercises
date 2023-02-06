const VoteButton = (props) => {
  const {handler} = props;

  return (
    <button onClick={handler}>vote</button>
  );
}

export default VoteButton
