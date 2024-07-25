import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ConfidenceFourIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="16" rx="2" ry="2" width="8" y="28" />
                <rect height="24" rx="2" ry="2" width="8" x="12" y="20" />
                <rect height="32" rx="2" ry="2" width="8" x="24" y="12" />
                <rect height="40" rx="2" ry="2" width="8" x="36" y="4" />
            </svg>
        );
    },
);
