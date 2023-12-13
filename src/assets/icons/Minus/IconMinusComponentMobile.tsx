interface IconMinusComponentMobileProps {
  height?: number;
  width?: number;
}
const IconMinusComponentMobile = ({
  height = 20,
  width = 20,
}: IconMinusComponentMobileProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    fill="none"
  >
    <path
      fill="#4F372F"
      stroke="#4F372F"
      strokeWidth={2}
      d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <rect width={12} height={3} x={4} y={8.5} fill="#fff" rx={1.5} />
  </svg>
);
export default IconMinusComponentMobile;
