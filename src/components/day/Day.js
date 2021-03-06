import React from 'react';
import './day.scss';

const Day = (props) => {
  const {day, showModal} = props;
  return (
    <li className="day">
      <div
      onClick={showModal}
      title={day.date}
      className={
        day.mood === 'good'
        ?
          "smiley smiley__good"
        :
          "smiley smiley__bad"
      }>
      {day.mood === 'good'
        ?
          ':)'
        :
          ':('
      }
      </div>
    </li>
  );
};

export {Day};