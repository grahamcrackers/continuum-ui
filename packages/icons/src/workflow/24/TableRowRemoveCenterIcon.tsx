import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableRowRemoveCenterIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M47.9 24A11.9 11.9 0 1 0 36 35.9 11.9 11.9 0 0 0 47.9 24ZM44 25.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5Z" />
                <path d="M4 6v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2v-4.335a15.812 15.812 0 0 1-4 1.682V40h-8v-.6a15.766 15.766 0 0 1-4-1.612V40h-8v-6h3.545a15.827 15.827 0 0 1-3.017-6H10v-8h10.528a15.827 15.827 0 0 1 3.017-6H20V8h8v2.214A15.766 15.766 0 0 1 32 8.6V8h8v.653a15.812 15.812 0 0 1 4 1.682V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm12 28v6H8v-6Zm0-26v6H8V8Z" />
            </svg>
        );
    },
);
