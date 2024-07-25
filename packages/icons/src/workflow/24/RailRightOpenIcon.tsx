import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const RailRightOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M20.933 30H32a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H20.933V7.481a1 1 0 0 0-1.707-.707L2 24l17.226 17.226a1 1 0 0 0 1.707-.707Z" />
                <rect height="40" rx="1" ry="1" width="6" x="38" y="4" />
            </svg>
        );
    },
);
