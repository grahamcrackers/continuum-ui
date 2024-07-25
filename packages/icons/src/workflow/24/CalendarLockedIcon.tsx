import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CalendarLockedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M45 32h-1v-2a10 10 0 0 0-20 0v2h-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V33a1 1 0 0 0-1-1Zm-17-2a6 6 0 0 1 12 0v2H28Zm8 10.221V43a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.779a3 3 0 1 1 4 0Z" />
                <path d="M40 6h-6V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H14V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H4a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h14v-3a4.92 4.92 0 0 1 .121-1H6V10h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h16v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4v6.583a13.92 13.92 0 0 1 4 1.951V8a2 2 0 0 0-2-2Z" />
            </svg>
        );
    },
);
