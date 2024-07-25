import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const DeduplicationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <circle cx="7.939" cy="6.25" r="3.75" />
                <path d="M21.506 10h-8.75l4.375-7.5 4.375 7.5z" />
                <circle cx="11.939" cy="30.25" r="3.75" />
                <path d="M27.603 34h-8.75l4.375-7.5 4.375 7.5zM32.121 10h-8.75l4.375-7.5 4.375 7.5zM27.939 12.058h-20v1.222a1.514 1.514 0 0 0 .723 1.3l5.689 4.02a3.056 3.056 0 0 1 1.114 2.377v4.193a.733.733 0 0 0 .714.75H19.7a.733.733 0 0 0 .714-.75v-4.194a3.056 3.056 0 0 1 1.113-2.376l5.689-4.015a1.514 1.514 0 0 0 .723-1.3Z" />
            </svg>
        );
    },
);
