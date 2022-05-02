import React from "react";
import { icons, IconType } from "@src/utils/icon";

interface IconProps {
  iconName: IconType;
}

const Icon = ({ iconName }: IconProps) => {
  return <>{icons[iconName]}</>;
};

export default Icon;
