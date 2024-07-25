import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M28 21.98a2 2 0 0 1-3.411 1.411l-6.578-6.572-6.578 6.572a2 2 0 0 1-2.874-2.773l.049-.049 7.992-7.984a2 2 0 0 1 2.825 0l7.989 7.983A1.989 1.989 0 0 1 28 21.98Z" />
            </svg>
        );
    },
);
