// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarsFiledBlacksvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      viewBox={"0 0 800 800"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M745.62 421.88c-36.53-66.57-120.12-90.92-186.69-54.38 66.57-36.54 90.92-120.12 54.38-186.69 36.54 66.57 120.12 90.91 186.69 54.38-66.57 36.54-90.91 120.12-54.38 186.69zm0 0zM315.93 800c-36.53-66.57-120.12-90.91-186.68-54.38 66.56-36.53 90.91-120.12 54.38-186.69 36.54 66.57 120.12 90.92 186.69 54.38-66.57 36.54-90.92 120.12-54.39 186.69zm0 0zm-35.52-437.93C225.52 262.09 99.98 225.53 0 280.41 99.98 225.52 136.54 99.98 81.66 0c54.88 99.97 180.42 136.54 280.41 81.65-99.98 54.89-136.54 180.43-81.66 280.42zm0 0z"
        }
        data-original={"#000000"}
      ></path>
    </svg>
  );
}

export default StarsFiledBlacksvgIcon;
/* prettier-ignore-end */
