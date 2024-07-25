import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BookmarkSingleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="m18.062 26.394 9.375 9.376c.311.316.561.2.561-.252V3a1 1 0 0 0-1-1H9.012a1 1 0 0 0-1 1L8 35.551c0 .457.262.578.586.281Z" />
            </svg>
        );
    },
);
