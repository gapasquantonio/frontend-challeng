import { selectDeviceDetails } from "../store/device/device.slice";
import { useAppSelector } from "../store/hooks";
import theme from "../theme";

export const breakpointMap = {
  [theme.breakpoints[0] as string]: "mobile",
  [theme.breakpoints[1] as string]: "mobileLandscape",
  [theme.breakpoints[2] as string]: "tablet",
  [theme.breakpoints[3] as string]: "desktop",
} as const;
type ScreenSizeKey = keyof typeof theme.breakpoints;
export type ScreenSizeValue =
  | (typeof theme.breakpoints)[ScreenSizeKey]
  | "desktopXL";

function useIsMobile() {
  const selectedDeviceDetails = useAppSelector(selectDeviceDetails);
  const { deviceWidth } = selectedDeviceDetails ?? {};
  const [, screenSize] = Object.entries(breakpointMap).find(
    ([breakpoint]) => (deviceWidth as number) <= +breakpoint.replace("px", "")
  ) ?? ["", "desktopXL"];

  const mobileSizes = ["mobile", "mobileLandscape"];
  return deviceWidth ? mobileSizes.includes(screenSize) : false;
}

export default useIsMobile;
