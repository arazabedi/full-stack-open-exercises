import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises1} />
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises2} />
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises3} />
    </>
  );
}

export default Content;
