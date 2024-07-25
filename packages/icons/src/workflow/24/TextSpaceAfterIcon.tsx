import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const TextSpaceAfterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="28" x="16" y="4" />
                <rect height="4" rx="1" ry="1" width="28" x="16" y="12" />
                <rect height="4" rx="1" ry="1" width="28" x="16" y="20" />
                <path d="M44 43V29a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1Zm-4-3H20v-8h20ZM4.864 45.685A.5.5 0 0 1 4 45.341V26.659a.5.5 0 0 1 .864-.343L14 36Z" />
            </svg>
        );
    },
);
