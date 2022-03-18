import { IconProps } from '../IconTypes';

export default function Heart({ colour = '#4574BF', size = 48 }: IconProps): JSX.Element {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M43.91 18.25c.107-.603.163-1.215.166-1.828A10.925 10.925 0 0 0 24 10.265a11.11 11.11 0 0 0-9.1-4.952A11.054 11.054 0 0 0 3.923 16.422c.003.613.059 1.225.167 1.828M10.032 29.75A102.69 102.69 0 0 0 24 44.125 102.595 102.595 0 0 0 37.968 29.75"
        stroke={colour}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.438 24h12.937l4.313-7.188 8.625 12.938L32.624 24h12.938"
        stroke={colour}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
