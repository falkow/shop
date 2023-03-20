import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ApprovalSVG from '../../assets/ApprovalSVG';
import styles from './FollowUs.module.scss';

const { wrapper, wrapperHeader, wrapperParagraph } = styles;

const FollowUs = () => {
  return (
    <Container className={wrapper}>
      <h2 className={wrapperHeader}>
        @behindgreendoor <ApprovalSVG />
      </h2>
      <Typography className={wrapperParagraph}>
        707K FOLLOWERS ON INSTAGRAM
      </Typography>
      <Typography className={wrapperParagraph}>
        Get inspired by tips and tricks from colleagues at GreenDoors.
      </Typography>
      <Typography className={wrapperParagraph}>#greenshop</Typography>
    </Container>
  );
};

export default FollowUs;
