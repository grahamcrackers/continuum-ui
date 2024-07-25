import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ThumbUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="24" rx="2" ry="2" width="8" x="4" y="18" />
                <path d="M43.341 18H32.133A48.365 48.365 0 0 0 33.95 5.8a3 3 0 0 0-3-3c-1.657 0-2.626 1.386-3 3C25.669 15.644 19.947 19 16 19v21h19.711a6 6 0 0 0 5.677-4.059l4.684-13.7A3 3 0 0 0 43.341 18Z" />
            </svg>
        );
    },
);
