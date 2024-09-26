import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    punctuation: null,
  });

  const newGood = () => {
    setData({
      ...data,
      good: data.good + 1,
      punctuation: data.punctuation + 1,
      all: data.all + 1,
    });
  };

  const newNeutral = () => {
    setData({
      ...data,
      neutral: data.neutral + 1,
      all: data.all + 1,
    });
  };

  const newBad = () => {
    setData({
      ...data,
      bad: data.bad + 1,
      punctuation: data.punctuation - 1,
      all: data.all + 1,
    });
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" onSmash={newGood} />
      <Button text="Neutral" onSmash={newNeutral} />
      <Button text="Bad" onSmash={newBad} />
      <Statistics data={data} />
    </div>
  );
};

const Button = ({ text, onSmash }) => <button onClick={onSmash}>{text}</button>;
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ data }) => {
  return data.punctuation !== null ? (
    <div>
      <h2>Statistics</h2>

      <div>
        <h2>Statistics</h2>
        <table>
          <thead>
            <tr>
              <td>Description</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            <StatisticLine text="Good" value={data.good} />
            <StatisticLine text="Neutral" value={data.neutral} />
            <StatisticLine text="Bad" value={data.bad} />
            <StatisticLine text="All" value={data.all} />
            <StatisticLine text="Average" value={data.punctuation / data.all} />
            <StatisticLine
              text="Positive"
              value={(data.good / data.all) * 100}
            />
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <p>No feedback given</p>
  );
};

export default App;
