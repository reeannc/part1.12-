import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    const randomIndex = getRandomInt(0, anecdotes.length - 1);
    setSelected(randomIndex);
  };
  //when clicked, generates random number,
  //then, updates the state

  const addVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  const maxVotesIndex = votes.indexOf(Math.max(...votes));
  //find index of anecdote with highest votes

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h2>anecdote with most votes</h2>
      <p>{anecdotes[maxVotesIndex]}</p>
      <p>has {votes[maxVotesIndex]} votes</p>
    </div>
  );
};

export default App;

//about events and setting or updating the state
