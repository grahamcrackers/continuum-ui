import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const AudioIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M30 3.417a1 1 0 0 0-1.268-.965l-16 4.447a1 1 0 0 0-.732.964v16.55a6.628 6.628 0 0 0-6.144.057c-3.113 1.515-4.687 4.7-3.515 7.1s4.646 3.136 7.759 1.62a6.434 6.434 0 0 0 3.9-5.333V12.824l14-4v11.589a6.628 6.628 0 0 0-6.144.057c-3.113 1.515-4.687 4.7-3.515 7.1s4.646 3.132 7.759 1.616a6.427 6.427 0 0 0 3.9-5.353V3.417Z" />
            </svg>
        );
    },
);
