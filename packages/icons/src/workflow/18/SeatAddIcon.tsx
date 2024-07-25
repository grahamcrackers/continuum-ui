import * as React from "react";
import { iconVariants } from "../../helpers";

import type { IconProps } from "../../helpers";

export const SeatAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
                <path d="M5 18H4a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1ZM9 20h7.886A12.285 12.285 0 0 1 27 14.7c.337 0 .67.014 1 .041V10a6 6 0 0 0-6-6h-8a6 6 0 0 0-6 6v9a1 1 0 0 0 1 1ZM14.7 27a12.256 12.256 0 0 1 1.06-5H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6.069a12.3 12.3 0 0 1-.369-3ZM27.1 18.2a8.9 8.9 0 1 0 8.9 8.9 8.9 8.9 0 0 0-8.9-8.9Zm5 9.4a.5.5 0 0 1-.5.5h-3.5v3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3.5h-3.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3.5v-3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 .5.5Z" />
            </svg>
        );
    },
);
