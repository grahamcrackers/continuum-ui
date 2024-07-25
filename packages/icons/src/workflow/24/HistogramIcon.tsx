import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const HistogramIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="10" rx="1" ry="1" width="4" x="4" y="30" />
                <rect height="20" rx="1" ry="1" width="4" x="10" y="20" />
                <rect height="34" rx="1" ry="1" width="4" x="16" y="6" />
                <rect height="24" rx="1" ry="1" width="4" x="22" y="16" />
                <rect height="18" rx="1" ry="1" width="4" x="28" y="22" />
                <rect height="26" rx="1" ry="1" width="4" x="34" y="14" />
                <rect height="8" rx="1" ry="1" width="4" x="40" y="32" />
            </svg>
        );
    },
);
