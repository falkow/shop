import React from 'react';
import { GrayStar } from '../../assets/GrayStar';
import { YellowStar } from '../../assets/YellowStar';
import styles from './StarScore.module.scss';

const { ratingWrapper, ratingNumber } = styles;

const StarScore = ({ rating }: { rating: number }) => {
  const howManyStars = 5;

  return (
    <div className={ratingWrapper}>
      {[...Array(howManyStars)].map((_, index) => {
        return Math.round(rating) < index + 1 ? (
          <GrayStar key={index} />
        ) : (
          <YellowStar key={index} />
        );
      })}
      <div className={ratingNumber}> {rating}</div>
    </div>
  );
};

export default StarScore;
