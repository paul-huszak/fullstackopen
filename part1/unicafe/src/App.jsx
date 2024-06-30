import { useState } from "react";

const DisplayFeedback = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const DisplayStatistics = (props) => {
  const { good, neutral, bad } = props;

  // Cálculos de las estadísticas
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  return (
    <>
      <tr>
        <td>all</td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{average.toFixed(1)}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{positive.toFixed(1)} %</td>
      </tr>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <DisplayStatistics good={good} neutral={neutral} bad={bad} />
      </tbody>
    </table>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <DisplayFeedback text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <DisplayFeedback text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
