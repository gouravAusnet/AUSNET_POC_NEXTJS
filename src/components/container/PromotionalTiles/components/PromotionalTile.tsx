import type { LinkField, ImageField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import Heart from 'components/container/Icons/Heart/Heart';
import PrimaryButton from 'components/container/PrimaryButton/PrimaryButton';

export type PromotionalTileProps = {
  fields: {
    cta: LinkField;
    icon?: ImageField;
    heading: Field<string>;
    description: Field<string>;
  };
  dark?: boolean;
};

export default function PromotionalTile({
  fields,
  dark = false,
}: PromotionalTileProps): JSX.Element {
  return (
    <div className={clsx('promotional-tile', dark && 'dark')}>
      {fields.icon && (
        <div className="promotional-tile__header">
          <span className="promotional-tile__icon">
            <Heart colour={dark ? '#fff' : '#4574BF'} />
          </span>

          {/* <Image media={fields.icon} className="promotional-tile__icon" /> */}
        </div>
      )}

      <div className="promotional-tile__body">
        <Text tag="h3" field={fields.heading} />
        <Text tag="p" field={fields.description} />
      </div>

      <div className="promotional-tile__footer">
        <PrimaryButton cta={fields.cta} dark={dark} />
      </div>
    </div>
  );
}
