import React from 'react';
import HikeCard from './HikeCard';

function CardContainer() {
  return (
    <div className="cardContainer"
    >
      <HikeCard />
      <HikeCard />
      <HikeCard />
      <HikeCard />
    </div>
  )
}

export default CardContainer;