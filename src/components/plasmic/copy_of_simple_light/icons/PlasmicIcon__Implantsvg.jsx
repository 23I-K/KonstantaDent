// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ImplantsvgIcon(props) {
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
          "M247.07 298.49h24.97v17.31h-24.97zm85.76 0h24.96v17.31h-24.96zm-85.76 36.06h24.97v17.31h-24.97zm85.76 0h24.96v17.31h-24.96zm-60.79-18.75h60.79v18.75h-60.79zm0 48.66c0 16.76 13.64 30.39 30.39 30.39 16.76 0 30.4-13.63 30.4-30.39v-12.6h-60.79v12.6zM233.19 255.3c0 13.34 10.86 24.2 24.2 24.2h14.65v18.99h60.79V279.5h14.64c13.35 0 24.2-10.86 24.2-24.2v-12.51H233.19v12.51zm48.78-164.5c-21.03-1.92-35.97 11.17-44.89 18.99-.76.67-1.48 1.31-2.16 1.89a3.962 3.962 0 01-4.23.6c-11.55-5.23-24.85-10.6-36.47-7.96a56.888 56.888 0 00-29.42 16.86c-3.78 4.1-6.93 8.73-9.38 13.73-.11.41-.27.81-.47 1.18-11.93 25.48-4.28 55.83 18.29 72.61.13.1.26.21.37.32.37.35.83.75 1.28 1.16.49.44.98.87 1.39 1.26 3.68 3.14 6.93 6.86 9.72 10.62l129.3-29.3c.91-4.63 2.25-9.42 4.24-13.86 9.36-21.35 8.37-45.3-2.66-64.03-8.17-14.18-20.89-22.95-34.91-24.07z"
        }
      ></path>
    </svg>
  );
}

export default ImplantsvgIcon;
/* prettier-ignore-end */
