import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const JourneyReportsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="24" rx="1" width="4" x="44" y="24" />
                <rect height="14" rx="1" width="4" x="38" y="34" />
                <rect height="10" rx="1" width="4" x="32" y="38" />
                <rect height="8" rx="1" width="4" x="26" y="40" />
                <path d="M24 34V14a4 4 0 0 1 4-4h6.349a6 6 0 1 0 0-4H28a8 8 0 0 0-8 8v8h-6.349a6 6 0 1 0 0 4H20v8a7.991 7.991 0 0 0 4 6.921ZM40 5.6A2.4 2.4 0 1 1 37.6 8 2.4 2.4 0 0 1 40 5.6ZM8 26.4a2.4 2.4 0 1 1 2.4-2.4A2.4 2.4 0 0 1 8 26.4Z" />
            </svg>
        );
    },
);
