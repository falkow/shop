import style from './Home.module.scss';
import mountain from '../../assets/mountain.jpg';
import mountain1 from '../../assets/mountain1.jpg';
import mountain2 from '../../assets/mountain2.jpg';
import Typewriter from 'typewriter-effect';

const { wrapper, wrapperContent, wrapperContentLeft, wrapperContentRight } =
  style;

const headers = ['Expensive.', 'Long', 'Poor Quality'];

export const Home = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperContent}>
        <div className={wrapperContentLeft}>
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: ['Expensive.', 'Long delivery.', 'Poor Quality.'],
              }}
            />
          </h1>
          {/* <h1>Expensive. Long. Poor Quality</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hello World!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          /> */}
        </div>
        <div className={wrapperContentRight}>
          <img src={mountain1} alt='backorund' />
        </div>
      </div>
    </div>
  );
};
