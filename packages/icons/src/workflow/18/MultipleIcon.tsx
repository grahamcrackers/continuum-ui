import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const MultipleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M31 4H21a1 1 0 0 0-1 1v5h4a2 2 0 0 1 2 2v4h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
                <rect height="12" rx="1" ry="1" width="12" x="4" y="20" />
                <path d="M23 12H13a1 1 0 0 0-1 1v5h4a2 2 0 0 1 2 2v4h5a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1Z" />
            </svg>
        );
    },
);
