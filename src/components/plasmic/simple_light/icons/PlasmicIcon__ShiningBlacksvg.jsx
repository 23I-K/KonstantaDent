// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ShiningBlacksvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      viewBox={"0 0 400 400"}
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
          "M387.75 189.31c-14.28-1.59-116.06 12.71-160.54-80.68-23.38-49.12-17.39-93.65-18.66-99.23-1.15-5.03-5.9-8.05-10.42-7.46-5.19.58-8.63 4.88-8.63 9.19v20.26c-3.53 69.68-35.22 128.98-101.8 149.85-38.44 12.05-71.83 6.85-78.06 8.21-9.99 2.27-10.07 16.62.11 18.88 8.72 1.84 74.27-8.78 125.17 33.49 3.32 2.76 8.24 2.31 10.99-1.02a7.785 7.785 0 00-1.01-10.99c-17.47-14.52-38.4-24.88-62.35-30.9 63.06-15.89 101.76-60.89 116.6-123.96 14.68 62.67 53.07 108.08 116.82 123.9-63.12 15.8-102.36 60.77-116.92 123.66-5.42-23.05-14.47-45.12-28.07-64.37-2.49-3.54-7.36-4.38-10.88-1.88-3.53 2.47-4.37 7.36-1.88 10.88 4.79 6.8 9.1 14.18 12.82 21.99 22.06 46.35 18.17 93.5 18.49 98.06.82 11.61 19.78 12.19 19.18-2.17-1.07-25.9.94-113.62 71.8-155.25 47.81-28.06 100.99-19.87 108.1-21.46 10.7-2.44 9.54-17.84-.86-19z"
        }
        data-original={"#000000"}
      ></path>
    </svg>
  );
}

export default ShiningBlacksvgIcon;
/* prettier-ignore-end */
