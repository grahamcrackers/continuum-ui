import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SeatIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <rect height="12" rx="2" ry="2" width="28" x="10" y="30" />
                <path d="M29.906 4H18.094A8.094 8.094 0 0 0 10 12.094V24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12.094A8.094 8.094 0 0 0 29.906 4ZM4 20a4 4 0 0 0-4 4v20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V22a2 2 0 0 0-2-2ZM44 20a4 4 0 0 1 4 4v20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2Z" />
            </svg>
        );
    },
);
