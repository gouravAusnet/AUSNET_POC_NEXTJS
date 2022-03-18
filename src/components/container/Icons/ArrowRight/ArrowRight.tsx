type ArrowRightProps = {
  size?: number;
  color?: string;
};

export default function ArrowRight({ color = '#ffffff', size = 24 }: ArrowRightProps): JSX.Element {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 11.813h13.75M13.938 7l4.812 4.813-4.813 4.812"
        stroke={color}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
