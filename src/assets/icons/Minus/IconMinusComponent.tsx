interface IconMinusComponentProps {
  height?: number;
  width?: number;
}
const IconMinusComponent = ({
  height = 32,
  width = 32,
}: IconMinusComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    fill="none"
  >
    <path
      fill="#DADADA"
      stroke="#DADADA"
      strokeWidth={2}
      d="M31 16.955c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15Z"
    />
    <rect width={18} height={3} x={7} y={15.455} fill="#5F5F5F" rx={1.5} />
  </svg>
);
export default IconMinusComponent;
