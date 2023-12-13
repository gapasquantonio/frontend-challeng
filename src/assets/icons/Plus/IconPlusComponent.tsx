interface IconPlusComponentProps {
  height?: number;
  width?: number;
}
const IconPlusComponent = ({
  height = 32,
  width = 32,
}: IconPlusComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    fill="none"
  >
    <path
      fill="#4F372F"
      fillRule="evenodd"
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M14.5 23.5a1.5 1.5 0 0 0 3 0v-6h6a1.5 1.5 0 0 0 0-3h-6v-6a1.5 1.5 0 0 0-3 0v6h-6a1.5 1.5 0 0 0 0 3h6v6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IconPlusComponent;
