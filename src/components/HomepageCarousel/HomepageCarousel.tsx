import type { ImageField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { useCallback, useMemo, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';

type HomepageCarouselProps = {
  fields: {
    headingCommunities: Field<string>;
    headingElectricity: Field<string>;
    headingSolar: Field<string>;
    headingGas: Field<string>;
    bodyCommunities: Field<string>;
    bodyElectricity: Field<string>;
    bodySolar: Field<string>;
    bodyGas: Field<string>;
    carouselLeft: ImageField;
    carouselRight: ImageField;
  };
};

export default function HomepageCarousel({ fields }: HomepageCarouselProps): JSX.Element {
  const controls = useAnimation();
  const [carouselCounter, setCarouselCounter] = useState(0);
  const slides = useMemo(
    () => [
      {
        heading: fields.headingCommunities,
        body: fields.bodyCommunities,
        headingColour: 'communities',
      },
      {
        heading: fields.headingElectricity,
        body: fields.bodyElectricity,
        headingColour: 'electricity',
      },
      {
        heading: fields.headingSolar,
        body: fields.bodySolar,
        headingColour: 'solar',
      },
      {
        heading: fields.headingGas,
        body: fields.bodyGas,
        headingColour: 'gas',
      },
    ],
    [fields]
  );

  const onChangeSlide = useCallback(
    (i: number) => {
      setCarouselCounter((p) =>
        p + i >= slides.length ? 0 : p + i < 0 ? slides.length - 1 : p + i
      );
      controls.start({ opacity: [0, 1], y: [20, 0], transition: { duration: 0.5 } });
    },
    [controls, slides.length]
  );

  return (
    <section className="carousel">
      <h2 className="carousel__heading">
        <span className="carousel__heading--1">Connecting</span>
        <motion.span
          animate={controls}
          className={clsx('carousel__heading--2', slides[carouselCounter].headingColour)}
        >
          <Text field={slides[carouselCounter].heading} />
        </motion.span>
      </h2>

      <motion.p animate={controls} className="carousel__body">
        <Text field={slides[carouselCounter].body} />
      </motion.p>

      <div className="carousel__btn-group">
        <button onClick={() => onChangeSlide(-1)} className="carousel__btn">
          <Image media={fields.carouselLeft} />
        </button>
        <button onClick={() => onChangeSlide(1)} className="carousel__btn">
          <Image media={fields.carouselRight} />
        </button>
      </div>
    </section>
  );
}
