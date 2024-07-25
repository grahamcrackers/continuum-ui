import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ArrowUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M24 16.1v17a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-17H5.007a.5.5 0 0 1-.353-.854L18 1.9l13.346 13.346a.5.5 0 0 1-.353.854Z" />
            </svg>
        );
    },
);
