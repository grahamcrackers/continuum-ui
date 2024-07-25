import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const CalendarAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="4" rx="1" ry="1" width="4" x="10" y="18" />
                <rect height="4" rx="1" ry="1" width="4" x="18" y="18" />
                <rect height="4" rx="1" ry="1" width="4" x="26" y="18" />
                <rect height="4" rx="1" ry="1" width="4" x="10" y="24" />
                <rect height="4" rx="1" ry="1" width="4" x="18" y="24" />
                <rect height="4" rx="1" ry="1" width="4" x="10" y="30" />
                <rect height="4" rx="1" ry="1" width="4" x="18" y="30" />
                <path d="M36 20.1a15.933 15.933 0 0 1 2 .139V19a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.239a15.933 15.933 0 0 1 2-.139Z" />
                <path d="M20.239 38H6V12h4v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h20v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1h4v9.28a15.881 15.881 0 0 1 4 2.365V9a1 1 0 0 0-1-1h-7V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H14V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h18.28a15.787 15.787 0 0 1-1.041-4Z" />
                <path d="M36 24.1A11.9 11.9 0 1 0 47.9 36 11.9 11.9 0 0 0 36 24.1Zm8 13.4a.5.5 0 0 1-.5.5H38v5.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V38h-5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H34v-5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V34h5.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
