interface IconSearchComponentProps {
  height?: number;
  width?: number;
}
const IconSearchComponent = ({
  height = 24,
  width = 24,
}: IconSearchComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    fill="none"
  >
    <path
      fill="#8A94A4"
      fillRule="evenodd"
      d="M9.275 15a6.667 6.667 0 1 1 5.267-2.579l4.489 4.49-1.178 1.178-4.49-4.49A6.638 6.638 0 0 1 9.275 15Zm5-6.667a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IconSearchComponent;
