import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MoveToIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 0 36 36"
                width="36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M21.879 20.344a1 1 0 0 1-1.414 0l-4.809-4.809a1 1 0 0 1 0-1.414L23.777 6H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12.223Z" />
                <path d="M23.707 2a.5.5 0 0 0-.353.854l3.482 3.482-8.136 8.139a.5.5 0 0 0 0 .707l2.118 2.118a.5.5 0 0 0 .707 0l8.139-8.139 3.482 3.483a.5.5 0 0 0 .854-.351V2Z" />
            </svg>
        );
    },
);
