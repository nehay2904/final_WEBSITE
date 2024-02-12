import React from 'react';
import CountdownTimer from './timer';

const Try = () => {
  const deadline = new Date('2024-02-23');

  return (
    <div className="date">
      <CountdownTimer deadline={deadline} />
    </div>
  );
};

export default Try;
