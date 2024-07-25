import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SelectBoxIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M29.2 2H6.8A4.8 4.8 0 0 0 2 6.8v22.4A4.8 4.8 0 0 0 6.8 34h22.4a4.8 4.8 0 0 0 4.8-4.8V6.8A4.8 4.8 0 0 0 29.2 2Zm-.355 10.377L14.566 26.655a.8.8 0 0 1-1.131 0l-6.28-6.278a.8.8 0 0 1 0-1.131l2.491-2.491a.8.8 0 0 1 1.131 0L14 19.98 25.223 8.755a.8.8 0 0 1 1.131 0l2.491 2.491a.8.8 0 0 1 0 1.131Z" />
            </svg>
        );
    },
);
