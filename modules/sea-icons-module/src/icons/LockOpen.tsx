import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLockOpen = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            d="M12 14v2M8.12 5.025A4.002 4.002 0 0 1 16 6v3M7 21h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
            stroke="#48d6d2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default SvgLockOpen;
