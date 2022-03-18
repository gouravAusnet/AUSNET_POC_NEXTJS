import { IconProps } from '../IconTypes';

export default function ArrowRight({ colour = '#ffffff', size = 24 }: IconProps): JSX.Element {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 11.813h13.75M13.938 7l4.812 4.813-4.813 4.812"
        stroke={colour}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
