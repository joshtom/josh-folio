import { ReactComponent as Arrow } from "@assets/icons/Arrow.svg";

export type IconType = "arrow";

export const icons: Record<IconType, JSX.Element> = {
  arrow: <Arrow />,
};
