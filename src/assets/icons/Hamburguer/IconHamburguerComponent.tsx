interface IconHamburguerComponentProps {
  height?: number;
  width?: number;
}
const IconHamburguerComponent = ({
  height = 16,
  width = 16,
}: IconHamburguerComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    fill="none"
  >
    <rect width={width} height={2} fill="#fff" rx={1} />
    <rect width={width} height={2} y={7} fill="#fff" rx={1} />
    <rect width={width} height={2} y={14} fill="#fff" rx={1} />
  </svg>
);
export default IconHamburguerComponent;
