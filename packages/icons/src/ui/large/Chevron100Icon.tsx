import * as React from "react";

import { iconVariants } from "../../helpers";
import type { IconProps } from "../../helpers";

export const Chevron100Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, focusable = false, hidden = true, color = "currentColor", ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                className={iconVariants({ size, className })}
                focusable={focusable}
                aria-hidden={hidden}
                {...props}
                ref={forwardedRef}
            >
                <path d="M4.5 13.25a1.094 1.094 0 0 1-.773-1.868L8.109 7 3.727 2.618A1.094 1.094 0 0 1 5.273 1.07l5.157 5.156a1.094 1.094 0 0 1 0 1.546L5.273 12.93a1.1 1.1 0 0 1-.773.321z" />
            </svg>
        );
    },
);
