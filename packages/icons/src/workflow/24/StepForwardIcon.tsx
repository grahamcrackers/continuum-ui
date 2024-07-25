import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StepForwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="40" rx="2" ry="2" width="12" x="2" y="4" />
                <path d="M22 42.133V5.867a2 2 0 0 1 3.257-1.556l21.709 18.133a2 2 0 0 1 0 3.112L25.257 43.689A2 2 0 0 1 22 42.133Z" />
            </svg>
        );
    },
);
