interface IconArrowComponentProps {
  height?: number;
  width?: number;
}
const IconCloseComponent = ({
  height = 30,
  width = 30,
}: IconArrowComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.4142 16C5.02367 16.3905 4.39051 16.3905 3.99998 16C3.60946 15.6095 3.60946 14.9763 3.99999 14.5858L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L20 14.5858C20.3905 14.9763 20.3905 15.6095 20 16C19.6095 16.3905 18.9763 16.3905 18.5858 16L12.7071 10.1213C12.3166 9.7308 11.6834 9.7308 11.2929 10.1213L5.4142 16Z"
      fill="#4F372F"
    />
    <g filter="url(#a)">
      <rect
        width={28}
        height={28}
        x={2}
        fill="#fff"
        rx={14}
        shapeRendering="crispEdges"
      />
      <path
        fill="#4F372F"
        fillRule="evenodd"
        d="M21.734 8.275a.906.906 0 0 0-1.284 0L16 12.717l-4.45-4.45a.906.906 0 1 0-1.284 1.282L14.716 14l-4.45 4.45a.906.906 0 1 0 1.284 1.284l4.45-4.45 4.45 4.45a.906.906 0 1 0 1.284-1.284L17.284 14l4.45-4.45a.912.912 0 0 0 0-1.275Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={32}
        height={32}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1737_694"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1737_694"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default IconCloseComponent;
