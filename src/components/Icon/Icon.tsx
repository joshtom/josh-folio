import React, { Fragment } from "react";
import { icons, IconType } from "@utils/Icon";
import "./Icon.styles";

interface IconProps {
  iconName: IconType;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {
  return <Fragment>{icons[iconName]}</Fragment>;
};

export default Icon;
