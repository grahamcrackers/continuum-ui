import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const ThumbDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="24" rx="2" ry="2" width="8" x="4" y="8" />
                <path d="M43.236 29.9H32.028a50.694 50.694 0 0 1 1.922 12.3 3 3 0 0 1-3 3c-1.657 0-2.626-1.386-3-3C25.669 32.356 19.947 29 16 29V8h19.711a6 6 0 0 1 5.677 4.059l4.684 13.7a2.973 2.973 0 0 1-2.836 4.141Z" />
            </svg>
        );
    },
);
