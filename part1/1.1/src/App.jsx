import { useEffect, useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const newNeutral = () => setNeutral(neutral + 1);
  const newGood = () => setGood(good + 1);
  const newBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" onSmash={newGood} />
      <Button text="Neutral" onSmash={newNeutral} />
      <Button text="Bad" onSmash={newBad} />

      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;

const Button = ({ text, onSmash }) => <button onClick={onSmash}>{text}</button>;
