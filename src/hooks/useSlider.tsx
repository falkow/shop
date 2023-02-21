import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react';
import React, {
  MouseEventHandler,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export const useSlider = () => {
  const [currentSlider, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: false,

      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const handleSlidePrev = useCallback((e: any): void => {
    // (e: /* MouseEventHandler<HTMLElement> */): void => {
    // e.preventDefault();
    e.stopPropagation();

    if (instanceRef.current) instanceRef.current.prev();
  }, []);

  const handleSlideNext = useCallback((e: any): void => {
    // e.preventDefault();

    e.stopPropagation();
    if (instanceRef.current) instanceRef.current.next();
  }, []);

  return {
    sliderRef,
    thumbnailRef,
    handleSlidePrev,
    handleSlideNext,
    currentSlider,
  };
};
