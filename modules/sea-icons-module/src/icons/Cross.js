import * as React from "react";
const SvgCross = ({ title, titleId, ...props }) => (React.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", className: "cross_svg__icon cross_svg__multi-color", "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: "M19 19 5 5m14 0L5 19", style: {
            fill: "none",
            stroke: "#48d6d2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
        } })));
export default SvgCross;
