// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PlaceholdersvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        xmlns={"http://www.w3.org/2000/svg"}
        d={
          "M256 0C150.112 0 64 86.112 64 192c0 133.088 173.312 307.936 180.672 315.328a16.07 16.07 0 0022.656 0C274.688 499.936 448 325.088 448 192 448 86.112 361.888 0 256 0z"
        }
        fill={"#e9b8b8"}
        data-original={"#ffc107"}
      ></path>

      <circle
        xmlns={"http://www.w3.org/2000/svg"}
        cx={"256"}
        cy={"192"}
        r={"96"}
        fill={"#fafafa"}
        data-original={"#fafafa"}
      ></circle>
    </svg>
  );
}

export default PlaceholdersvgIcon;
/* prettier-ignore-end */
