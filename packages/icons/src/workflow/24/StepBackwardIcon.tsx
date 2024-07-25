import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const StepBackwardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="40" rx="2" ry="2" width="12" x="34" y="4" />
                <path d="M26 42.133V5.867a2 2 0 0 0-3.257-1.556L1.034 22.444a2 2 0 0 0 0 3.112l21.709 18.133A2 2 0 0 0 26 42.133Z" />
            </svg>
        );
    },
);
