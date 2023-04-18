import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import ApprovalSVG from '../../assets/ApprovalSVG';
import style from './FollowUs.module.scss';

// const { wrapper, wrapperHeader, wrapperParagraph } = styles;

const FollowUs = () => {
  return (
    <Container className={style.wrapper}>
      <h2 className={style.wrapperHeader}>
        @behindgreendoor <ApprovalSVG />
      </h2>
      <Typography className={style.wrapperParagraph}>
        707K FOLLOWERS ON INSTAGRAM
      </Typography>
      <Typography className={style.wrapperParagraph}>
        Get inspired by tips and tricks from colleagues at GreenDoors.
      </Typography>
      <Typography className={style.wrapperParagraph}>#greenshop</Typography>
    </Container>
  );
};

export default FollowUs;
