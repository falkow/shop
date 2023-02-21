import React from 'react';
import { GrayStar } from '../../assets/GrayStar';
import { YellowStar } from '../../assets/YellowStar';
import { HalfYellowStar } from '../../assets/HalfYellowStar';
import styles from './StarScore.module.scss';

const { ratingWrapper, ratingNumber } = styles;

const StarScore = ({ rating }: { rating: number }) => {
  const howManyStars = 5;

  return (
    <div className={ratingWrapper}>
      {[...Array(howManyStars)].map((_, index) => {
        let number = index + 0.5;
        return rating >= index + 1 ? (
          <YellowStar key={index} />
        ) : rating >= number ? (
          <HalfYellowStar />
        ) : (
          <GrayStar key={index} />
        );
      })}
      <div className={ratingNumber}> {rating}</div>
    </div>
  );
};

export default StarScore;
