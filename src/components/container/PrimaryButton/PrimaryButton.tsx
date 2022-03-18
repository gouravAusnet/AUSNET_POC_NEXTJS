import type { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';

import ArrowRight from 'components/container/Icons/ArrowRight/ArrowRight';
import clsx from 'clsx';

type PrimaryButtonsProps = {
  cta: LinkField;
  dark?: boolean;
};

export default function PrimaryButton({ cta, dark = false }: PrimaryButtonsProps): JSX.Element {
  return (
    <Link field={cta} className={clsx('primary-btn', dark && 'dark')}>
      <span className="primary-btn__circle">
        <ArrowRight />
      </span>
      <span className="primary-btn__text">{cta.value.text}</span>
    </Link>
  );
}
