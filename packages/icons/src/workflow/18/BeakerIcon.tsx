import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const BeakerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M33.072 31.759 24 14V4h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v10L2.928 31.759A3 3 0 0 0 5.659 36h24.682a3 3 0 0 0 2.731-4.241ZM8.727 24.364 14 14.454V4h8v10.455l2.636 4.909Z" />
            </svg>
        );
    },
);
