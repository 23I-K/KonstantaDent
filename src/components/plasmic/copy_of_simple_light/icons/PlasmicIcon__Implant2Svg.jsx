// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Implant2SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      shapeRendering={"geometricPrecision"}
      textRendering={"geometricPrecision"}
      imageRendering={"optimizeQuality"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      viewBox={"0 0 600 600"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"299.34"} cy={"299.77"} r={"297.5"} fill={"#2e4f7f"}></circle>

      <path
        d={
          "M172.08 461.32h259.23c2.65 0 4.8-2.15 4.8-4.8V329.24l-23.57 2.88c-18.92 1.77-45.99 15.22-51.57 33.38l-5.69 32.71c-8.19 27.84-28.51 28.3-52.68 28.74-24.65.44-38.66-1.45-47.83-30.08l-10.57-30.94c-5.58-18.16-34.43-32.05-53.35-33.82l-23.57-2.86v127.27c0 2.65 2.15 4.8 4.8 4.8z"
        }
        fill={"#e9b8b8"}
      ></path>

      <path
        fill={"#fff"}
        d={
          "M247.07 317.24h24.97v17.31h-24.97zm85.76 0h24.96v17.31h-24.96zm-85.76 36.07h24.97v17.31h-24.97zm85.76 0h24.96v17.31h-24.96zm-60.79-18.76h60.79v18.76h-60.79zm0 48.66c0 16.76 13.64 30.4 30.39 30.4 16.76 0 30.4-13.64 30.4-30.4v-12.59h-60.79v12.59zm-38.85-109.16c0 13.35 10.86 24.2 24.2 24.2h14.65v18.99h60.79v-18.99h14.64c13.35 0 24.2-10.85 24.2-24.2v-12.51H233.19v12.51zm124.16-128.57c-20.12-6.41-37.53 3.16-47.93 8.87-.89.49-1.73.95-2.52 1.37-1.36.74-3.02.61-4.26-.32-10.15-7.6-21.98-15.7-33.89-15.64a56.91 56.91 0 00-32.37 10.13 57.626 57.626 0 00-12.12 11.37c-.19.38-.43.74-.71 1.06-17.14 22.31-16.22 53.59 2.2 74.85.11.12.21.25.3.39.29.42.64.91 1 1.4.38.54.77 1.07 1.08 1.53 2.92 3.86 5.29 8.2 7.21 12.47l132.57-.73c1.88-4.32 4.23-8.71 7.12-12.62 13.75-18.83 17.95-42.43 11.22-63.1-4.92-15.6-15.45-26.91-28.9-31.03z"
        }
      ></path>
    </svg>
  );
}

export default Implant2SvgIcon;
/* prettier-ignore-end */
