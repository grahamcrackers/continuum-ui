import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RewindIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M4 18 18.341 5.452A1 1 0 0 1 20 6.2v23.6a1 1 0 0 1-1.659.753ZM22 11l6.342-5.549A1 1 0 0 1 30 6.2v23.6a1 1 0 0 1-1.658.753L22 25Z" />
            </svg>
        );
    },
);
