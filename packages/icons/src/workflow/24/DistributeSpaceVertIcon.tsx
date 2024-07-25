import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DistributeSpaceVertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="14" rx="2" ry="2" width="30" x="14" y="28" />
                <rect height="16" rx="2" ry="2" width="20" x="16" y="4" />
                <path d="M2 13v3H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v8H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6v-8h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6v-3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z" />
            </svg>
        );
    },
);
