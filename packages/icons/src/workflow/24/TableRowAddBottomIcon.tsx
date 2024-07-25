import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TableRowAddBottomIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24.1 36A11.9 11.9 0 1 0 36 24.1 11.9 11.9 0 0 0 24.1 36Zm3.9-1.5a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5Z" />
                <path d="M20.1 36a15.806 15.806 0 0 1 2.175-8H20v-8h8v2.275a15.809 15.809 0 0 1 4-1.648V20h8v.627a15.809 15.809 0 0 1 4 1.648V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h16.275a15.806 15.806 0 0 1-2.175-8ZM32 8h8v8h-8ZM20 8h8v8h-8Zm-4 20H8v-8h8Zm0-12H8V8h8Z" />
            </svg>
        );
    },
);
