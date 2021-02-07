import React from 'react';

import { Instructions, RandomFact, RandomImage, MainContentContainer } from '../styled-components/DashBoardStyles';
import { Title } from '../styled-components/MainStyles';
import appreciation from '../assets/appreciation.svg';
import balloons from '../assets/balloons.png';
import rocket2 from '../assets/rocket2.png';
import mother from '../assets/mother.png';
import motherBaby from '../assets/mother-baby.png';
import party from '../assets/party.svg';

const babyFacts = [
  'Babies are born to boogie! 🕺 Studies have shown that babies are born with innate sense of rhythm',
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

const randomImages = [
  appreciation,
  balloons,
  rocket2,
  mother,
  motherBaby,
  party
];

export const DashboardHome = () => {
  const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
  const randomIndex = babyFacts[Math.floor(Math.random() * babyFacts.length)];

  return (
    <>
      <Instructions> TIP! To change the picture click on it and then hit &quot;Upload&quot;!</Instructions>
      <MainContentContainer>
        <Title><span role="img" aria-label="lightbulb-emoji">💡</span> Fun Fact <span role="img" aria-label="lightbulb-emoji">💡</span></Title>
        <RandomFact>{`${randomIndex}`}</RandomFact>
        <RandomImage src={`${randomImage}`} alt="greeting" />
      </MainContentContainer>
    </>
  )
};
