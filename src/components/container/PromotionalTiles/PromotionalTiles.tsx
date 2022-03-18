import type { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import type { PromotionalTileProps } from './components/PromotionalTile';
import clsx from 'clsx';

import PromotionalTile from './components/PromotionalTile';

export type PromotionalTilesProps = {
  fields: {
    tiles: Array<{ id: string } & PromotionalTileProps>;
    backgroundColour: Field<string>;
  };
};

export default function PromotionalTiles({ fields }: PromotionalTilesProps): JSX.Element {
  return (
    <section
      className={clsx('promotional-tiles', fields.backgroundColour.value === 'Dark' && 'dark')}
    >
      <div className={clsx('promotional-tiles__grid', `grid-cols-${fields.tiles.length}`)}>
        {fields.tiles.map(t => (
          <PromotionalTile
            key={t.id}
            fields={t.fields}
            dark={fields.backgroundColour.value === 'Dark'}
          />
        ))}
      </div>
    </section>
  );
}
