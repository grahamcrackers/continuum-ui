import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableRowAddTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M36 23.9A11.9 11.9 0 1 0 24.1 12 11.9 11.9 0 0 0 36 23.9Zm-8-13.4a.5.5 0 0 1 .5-.5H34V4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V10h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-5.5a.5.5 0 0 1-.5-.5Z" />
                <path d="M22.275 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V25.725a15.809 15.809 0 0 1-4 1.648V28h-8v-.627a15.809 15.809 0 0 1-4-1.648V28h-8v-8h2.275a15.8 15.8 0 0 1 0-16ZM32 32h8v8h-8Zm-12 0h8v8h-8Zm-4-4H8v-8h8Zm0 12H8v-8h8Z" />
            </svg>
        );
    },
);
