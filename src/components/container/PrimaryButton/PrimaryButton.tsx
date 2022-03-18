import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import type { LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';

import ArrowRight from 'components/container/Icons/ArrowRight/ArrowRight';
import clsx from 'clsx';

type PrimaryButtonsProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  tag: 'button' | 'link';
  cta?: LinkField;
  children?: ReactNode;
  onClick?: () => void;
  dark?: boolean;
};

export default function PrimaryButton({
  children,
  onClick,
  tag,
  cta,
  className,
  dark = false,
  ...props
}: PrimaryButtonsProps): JSX.Element {
  return tag === 'link' && cta ? (
    <Link field={cta} className={clsx('primary-btn', dark && 'dark', className)}>
      <span className="primary-btn__circle">
        <ArrowRight />
      </span>
      <span className="primary-btn__text">{cta.value.text}</span>
    </Link>
  ) : (
    <button onClick={onClick} {...props} className={clsx('primary-btn', dark && 'dark', className)}>
      <span className="primary-btn__circle">
        <ArrowRight />
      </span>
      <span className="primary-btn__text">{children}</span>
    </button>
  );
}
