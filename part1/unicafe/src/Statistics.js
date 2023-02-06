import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  let all = props.good + props.bad + props.neutral;
  let average = all > 0 ? (props.good - props.bad) / all: 0;
  let positive = all > 0 ? props.good / all : 0;

  if (all>0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="postive" value={positive} />
        </tbody>
      </table>
    )
  } else {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }
}

export default Statistics
