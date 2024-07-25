import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const FastForwardCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M24 4.1A19.9 19.9 0 1 0 43.9 24 19.9 19.9 0 0 0 24 4.1Zm1.481 29.73a1 1 0 0 1-1.581-.813V14.983a1 1 0 0 1 1.581-.813L38.1 23.187a1 1 0 0 1 0 1.627ZM19.9 29.243l-6.419 4.587a1 1 0 0 1-1.581-.813V14.983a1 1 0 0 1 1.581-.813l6.419 4.587Z" />
            </svg>
        );
    },
);
