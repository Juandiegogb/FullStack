import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [punctuation, setPunctuation] = useState(0);

  const [data, setData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    punctuation: 0,
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

const Statistics = ({data}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good {data.good}</p>
      <p>Neutral {data.neutral}</p>
      <p>Bad {data.bad}</p>
      <p>All {data.all}</p>
      <p>Average {data.punctuation / data.all}</p>
      <p>Positive {(data.good / data.all) * 100} %</p>
    </div>
  );
};

export default App;
