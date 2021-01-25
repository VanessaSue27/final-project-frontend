import React from 'react';
import { useSelector } from 'react-redux';

const babyFacts = [
  'Babies are born to Boogie! 🕺 Studies have shown that babies are born with innate sense of rhythm',
  'Newborns have natural aquatic instincts when in water 🏊‍♀️',
  'Babies are born with 300 bones 🦴',
  'Smiles are reserved for human babies only 👶',
  'Babies go through around 3360 nappies in the first year 👀',
  'Infants first recognise the colour Red 🔴! The last ones? Blue 🔵 and Purple 🟣',
  'Newborns are tear-free 💦, they only start producing tears at 3 weeks of age',
  'Babies grow at an insanely speedy rate 🚀. Treasure those memories! ♥️',
  'Babies will sleep, on average, 5400 hours in the first year 😴',
  'Babies tastebuds only recognise sweet and sour 🍬',
  'Babies deprive their parents of approximately 44 days of sleep, on average, in the first year 😬'
];

export const DashboardHome = () => {
  const username = useSelector((store) => store.user.username);

  const pickRandomFacts = () => {
    const randomIndex = Math.floor(Math.random() * babyFacts.length);
    return babyFacts[randomIndex];
  };

  return (
    <>
      <h1>{`Hello, ${username}! This is your Dashboard`}</h1>
      <h2>💡Fun fact</h2>
      <h2>{pickRandomFacts()}</h2>
    </>
  )
};
