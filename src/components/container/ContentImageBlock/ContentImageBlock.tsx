import type { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { useMemo } from 'react';
import PrimaryButton from 'components/container/PrimaryButton/PrimaryButton';

export type ContentImageBlockProps = {
  fields: {
    image: ImageField;
    heading: Field<string>;
    description: Field<string>;
    title?: Field<string>;
    cta: LinkField;
    backgroundColour: Field<string>; // white, grey, dark
    imageAlignment: Field<string>; // left, right
  };
};

/**
 * Reuseable Content Image Block component
 * Read more: https://ausnetservices-adaptivedelivery.atlassian.net/wiki/spaces/DD/pages/2279245897/E01.M12+-+Content+and+image+block
 *
 */
export default function ContentImageBlock({ fields }: ContentImageBlockProps): JSX.Element {
  const heading = useMemo(() => fields.heading.value.split(' '), [fields.heading.value]);

  return (
    <section className={clsx('content-image-block', fields.backgroundColour.value)}>
      <h2 className="content-image-block__title">
        <span>{heading.slice(0, 2).join(' ')}</span>
        <span>{heading.slice(2, 4).join(' ')}</span>
      </h2>

      <div className="content-image-block__content">
        {/* TODO: change this to use image from sitecore */}
        {/* <Image media={fields.image} /> */}
        <img
          src="/assets/content-img.png"
          alt="content image"
          className="content-image-block__image"
        />
        {/* <div></div> */}

        <div className="content-image-block__body">
          <Text tag="h3" field={fields.title} className="content-image-block__heading" />
          <Text tag="p" field={fields.description} className="content-image-block__description" />

          <div>
            <PrimaryButton cta={fields.cta} dark={fields.backgroundColour.value === 'Dark'} />
          </div>
        </div>
      </div>
    </section>
  );
}
